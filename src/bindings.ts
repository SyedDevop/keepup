/* eslint-disable */
// This file was generated by [tauri-specta](https://github.com/oscartbeaumont/tauri-specta). Do not edit this file manually.

declare global {
    interface Window {
        __TAURI_INVOKE__<T>(cmd: string, args?: Record<string, unknown>): Promise<T>;
    }
}

// Function avoids 'window not defined' in SSR
const invoke = () => window.__TAURI_INVOKE__;

export function getAllKeepups() {
    return invoke()<KeepUp[]>("get_all_keepups")
}

export function newKeepups(task: string) {
    return invoke()<KeepUp | null>("new_keepups", { task })
}

export function syncKeepup() {
    return invoke()<null>("sync_keepup")
}

export type KeepUp = { uid: string; task: string; task_complete: boolean }
