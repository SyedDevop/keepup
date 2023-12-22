import { KeepUp } from "@src/bindings";

export const castToTaskList = (k: KeepUp[]): TaskType[] => {
  const data = k.map(
    (t) =>
      ({
        uid: t.uid,
        task: t.task,
        taskStatus: t["task_state"],
      }) as TaskType,
  );
  return data;
};
export const createTask = (task: string): TaskType => {
  const uid = `${new Date().valueOf()}`;
  const taskStatus = false;
  return {
    uid,
    task,
    taskStatus,
  };
};
