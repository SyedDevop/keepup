# Tauri + React + Typescript

This template should help get you started developing with Tauri, React and Typescript in Vite.

## Add .env file for turso sqllite database

Link for the turso Remote sync-example : [Remote Sync](https://github.com/tursodatabase/embedded-replica-examples/tree/main/remote-sync)

```shell
echo "VITE_DB_URL=file:localdb" >> .env
echo "VITE_SYNC_URL=$(turso db show --url sync-example)" >> .env
echo "VITE_AUTH_TOKEN=$(turso db tokens create sync-example)" >> .env
```

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)
