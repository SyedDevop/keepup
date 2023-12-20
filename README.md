# KeepUp

This is a note/task taking app which is local first model for saving data in
database and have a remote sync.

## Add .env file for turso sqlite database

### Manually add the .env file

Don't forget cd into the ./src-tauri folder before runing the script.

```sh
cd ./src-tauri
echo "DB_URL=file:localdb" >> .env
echo "TAURI_SYNC_URL=$(turso db show --url keepup-db)" >> .env
echo "TAURI_AUTH_TOKEN=$(turso db tokens create keepup-db)" >> .env
```

### Or run the setup-env command

```sh
./setup-env.sh
```

## Link from plugin and references

- [x] [Remote Sync](https://github.com/tursodatabase/embedded-replica-examples/tree/main/remote-sync)
      , [Example for tauri,turso note taking app](https://github.com/turso-extended/app-turso-notes)
      Link for the turso Remote sync-example
- [] [Specta](https://github.com/oscartbeaumont/tauri-specta) A rust library
  for provides a system for type introspection and a set of language exporters
  which allow you to export your Rust types to other languages.
