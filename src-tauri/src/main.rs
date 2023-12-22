// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use dotenv::dotenv;
use specta::collect_types;
use tauri_specta::ts;

use keepup::{
    delete_keepups, get_all_keepups, new_keepups, sync_keepup, toggle_keepups, update_keepups,
};
mod keepup;

fn main() {
    let _ = dotenv();
    #[cfg(debug_assertions)]
    ts::export(
        collect_types![
            get_all_keepups,
            new_keepups,
            sync_keepup,
            toggle_keepups,
            update_keepups,
            delete_keepups
        ],
        "../src/bindings.ts",
    )
    .unwrap();
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            get_all_keepups,
            new_keepups,
            sync_keepup,
            toggle_keepups,
            update_keepups,
            delete_keepups
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
