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

export function toggleKeepups(uid: string, state: boolean) {
    return invoke()<null>("toggle_keepups", { uid,state })
}

export function updateKeepups(uid: string, task: string) {
    return invoke()<null>("update_keepups", { uid,task })
}

export function deleteKeepups(uid: string) {
    return invoke()<null>("delete_keepups", { uid })
}

export type KeepUp = { uid: string; task: string; task_state: boolean }
