echo "Starting setup-env.sh....."

cd ./src-tauri;

echo "DB_URL=file:localdb" >> .enva
echo "TAURI_SYNC_URL=$(turso db show --url keepup-db)" >> .enva
echo "TAURI_AUTH_TOKEN=$(turso db tokens create keepup-db)" >> .env

echo "Finished setup-env.sh....."