import { create } from "zustand";

interface keepUpState {
  keepup: TaskType[];
  delete: (uid: string) => void;
  add: (task: string) => void;
  edit: (uid: string) => void;
}

export const createTask = (task: string): TaskType => {
  const uid = task.length;
  const taskStatus = false;

  return {
    uid,
    task,
    taskStatus,
  };
};
export const useKeepUpStore = create<keepUpState>((set) => ({
  keepup: [] as TaskType[],
  add: (task) =>
    set((state) => {
      const newTask = createTask(task);
      return { keepup: [...state.keepup, newTask] };
    }),
  delete: (_uid: string) => set((state) => ({ keepup: state.keepup })),
  edit: (_uid: string) => set((state) => ({ keepup: state.keepup })),
}));

export default useKeepUpStore;
