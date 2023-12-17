// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use dotenv::dotenv;

use keepup::{get_all_keepups, new_keepups, sync_keepup};
mod keepup;

fn main() {
    let _ = dotenv();
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            get_all_keepups,
            new_keepups,
            sync_keepup
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
