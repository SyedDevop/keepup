import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import * as tauriApi from "@src/bindings";

interface keepUpState {
  keepup: TaskType[];
  delete: (uid: string) => void;
  add: (task: string) => void;
  edit: (uid: string, task: string) => void;
  toggleTask: (uid: string) => void;
  setAllKeepup: (keepup: TaskType[]) => void;
}

// const callDb = async () => {
//   try {
//     await invoke("sync_keepup");
//     const result = await invoke("get_all_keepups");
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };
//
// callDb();

export const createTask = (task: string): TaskType => {
  const uid = `${new Date().valueOf()}`;
  const taskStatus = false;

  return {
    uid,
    task,
    taskStatus,
  };
};

//TODO :[x](1) Fetch the data from the database and put it in the store.
//      [](1.5) Clean up the fetching logic in App.tsx.
//TODO :[x](2) Add the new task to the database.
//TODO :[](3) Update the database when the task is toggled.
//TODO :[](4) Remove the task from the database when the user deletes it.
//TODO :[](5) Update the database when the user edits the task.

export const useKeepUpStore = create<keepUpState>()(
  immer((set) => ({
    keepup: [] as TaskType[],
    add: (task) =>
      set((state) => {
        const newTask = createTask(task);
        tauriApi.newKeepups(task);
        state.keepup.push(newTask);
      }),
    setAllKeepup: (keepup) => set({ keepup }),
    toggleTask: (uid) =>
      set((state) => {
        const toggledTask = state.keepup.find((task) => task.uid === uid);
        if (toggledTask) {
          toggledTask.taskStatus = !toggledTask.taskStatus;
        }
      }),
    delete: (_uid) => set((state) => ({ keepup: state.keepup })),
    edit: (uid, newTask) =>
      set((state) => {
        const taskToEdit = state.keepup.find((task) => task.uid === uid);
        if (taskToEdit) {
          taskToEdit.task = newTask;
        }
      }),
  })),
);

export default useKeepUpStore;
