use dotenv::dotenv;
use libsql::Connection;
use libsql::Database;
use std::env;

use super::Result;

pub async fn get_data_base() -> Result<(Database, Connection)> {
    dotenv().expect(".env file not found");

    let db_path = env::var("DB_PATH").expect("DB_PATH not found in .env");
    let sync_url = env::var("TURSO_SYNC_URL").expect("TURSO_SYNC_URL not found in .env");
    let auth_token = env::var("TURSO_AUTH_TOKEN").expect("TURSO_TOKEN not found in .env");

    let db: Database = Database::open_with_remote_sync(db_path, sync_url, auth_token).await?;

    let conn = db.connect()?;

    Ok((db, conn))
}
