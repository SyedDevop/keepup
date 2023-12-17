use libsql::{params, Row, Rows};
use serde::{Deserialize, Serialize};
use uuid::Uuid;

use super::*;

#[derive(Deserialize, Serialize, Debug)]
pub struct KeepUp {
    pub uid: String,
    pub task: String,
    pub task_complete: u64,
}
impl KeepUp {
    pub fn from_row(row: &Row) -> Result<Self> {
        Ok(Self {
            uid: row.get(0)?,
            task: row.get(1)?,
            task_complete: row.get(2)?,
        })
    }
    pub fn from_rows(rows: &mut Rows) -> Result<Vec<Self>> {
        let mut keepups: Vec<KeepUp> = Vec::new();
        while let Some(row) = rows.next()? {
            keepups.push(KeepUp::from_row(&row)?);
        }
        Ok(keepups)
    }
}
#[tauri::command]
pub async fn sync_keepup() -> Result<()> {
    let (db, _) = get_data_base().await?;
    db.sync().await?;
    Ok(())
}
#[tauri::command]
pub async fn get_all_keepups() -> Result<Vec<KeepUp>> {
    let (_, conn) = get_data_base().await?;
    let mut results = conn.query("SELECT * FROM keepup", ()).await?;
    Ok(KeepUp::from_rows(&mut results)?)
}

#[tauri::command]
pub async fn new_keepups(task: String) -> Result<Option<KeepUp>> {
    println!("new_keepups: {}", task);
    let (db, conn) = get_data_base().await?;
    let uid = Uuid::new_v4().to_string();
    let params = params![uid, task, 0];
    let mut results = conn
        .query("INSERT INTO keepup VALUES(?, ?, ?)", params)
        .await?;
    let _ = db.sync().await?;
    let ret = match results.next()? {
        Some(row) => Some(KeepUp::from_row(&row)?),
        None => None,
    };
    Ok(ret)
}
