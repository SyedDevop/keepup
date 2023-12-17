import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";
import { invoke } from "@tauri-apps/api";

interface keepUpState {
  keepup: TaskType[];
  delete: (uid: number) => void;
  add: (task: string) => void;
  edit: (uid: number, task: string) => void;
  toggleTask: (uid: number) => void;
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
  const uid = new Date().valueOf();
  const taskStatus = false;

  return {
    uid,
    task,
    taskStatus,
  };
};

//TODO :[](1) Fetch the data from the database and put it in the store.
//TODO :[x](2) Add the new task to the database.
//TODO :[](3) Update the database when the task is toggled.
//TODO :[](4) Remove the task from the database when the user deletes it.
//TODO :[](5) Update the database when the user edits the task.

export const useKeepUpStore = create<keepUpState>()(
  immer(
    persist(
      (set) => ({
        keepup: [] as TaskType[],
        add: (task) =>
          set((state) => {
            const newTask = createTask(task);
            invoke("new_keepups", { task });
            state.keepup.push(newTask);
          }),
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
      }),
      {
        name: "keepUpState",
      },
    ),
  ),
);

export default useKeepUpStore;
