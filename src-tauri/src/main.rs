// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use dotenv::dotenv;
use serde_json::json;
use std::env;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    println!("Greetings from fronted: {}!", name);
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
fn get_env() -> String {
    let j = json!({
    "url": "file:/test.db",
    "sync_url": env::var("DB_URL").unwrap(),
    "auth_token": env::var("AUTH_TOKEN").unwrap(),
    });
    j.to_string()
}

fn main() {
    let _ = dotenv();
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet, get_env])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
