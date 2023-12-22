import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import * as tauriApi from "@src/bindings";
import { castToTaskList, createTask } from "./storeUtils";

interface keepUpState {
  keepup: TaskType[];
  delete: (uid: string) => void;
  add: (task: string) => void;
  edit: (uid: string, task: string) => void;
  toggleTask: (uid: string, state: boolean) => void;
  setAllKeepup: (keepup: TaskType[]) => void;
  fetchKeepup: () => void;
}

//BUG : Fix the syncKeepup fun when called in offline mode.
//It dose not return any thing.

export const useKeepUpStore = create<keepUpState>()(
  immer((set) => ({
    keepup: [] as TaskType[],
    add: (task) =>
      set((state) => {
        const newTask = createTask(task);
        tauriApi.newKeepups(task);
        state.keepup.push(newTask);
      }),

    fetchKeepup: async () => {
      try {
        await tauriApi.syncKeepup();
      } catch (error) {
        console.log("Synck Error", error);
      }
      try {
        const result = await tauriApi.getAllKeepups();
        const keepup = castToTaskList(result);
        set({ keepup });
      } catch (error) {
        console.error(error);
      }
    },

    setAllKeepup: (keepup) => set({ keepup }),

    toggleTask: async (uid, state) => {
      set((s) => {
        const toggledTask = s.keepup.find((task) => task.uid === uid);
        if (toggledTask) {
          toggledTask.taskStatus = !state;
        }
      });
      try {
        await tauriApi.toggleKeepups(uid, !state);
      } catch (error) {
        console.log(error);
      }
    },

    delete: async (uid) => {
      set((state) => {
        const index = state.keepup.findIndex((task) => task.uid === uid);
        if (index > -1) {
          state.keepup.splice(index, 1);
        }
      });
      try {
        await tauriApi.deleteKeepups(uid);
      } catch (error) {
        console.log(error);
      }
    },

    edit: async (uid, newTask) => {
      set((state) => {
        const taskToEdit = state.keepup.find((task) => task.uid === uid);
        if (taskToEdit) {
          taskToEdit.task = newTask;
        }
      });
      try {
        await tauriApi.updateKeepups(uid, newTask);
      } catch (error) {
        console.log(error);
      }
    },
  })),
);

export default useKeepUpStore;
