import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";

interface keepUpState {
  keepup: TaskType[];
  delete: (uid: number) => void;
  add: (task: string) => void;
  edit: (uid: number, task: string) => void;
  toggleTask: (uid: number) => void;
}

export const createTask = (task: string): TaskType => {
  const uid = new Date().valueOf();
  const taskStatus = false;

  return {
    uid,
    task,
    taskStatus,
  };
};

export const useKeepUpStore = create<keepUpState>()(
  immer(
    persist(
      (set) => ({
        keepup: [] as TaskType[],
        add: (task) =>
          set((state) => {
            const newTask = createTask(task);
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
