import { useState } from "react";
import "./keepUpInput.css";
import { useKeepUpStore, createTask } from "@src/store/useKeepup";

type Props = {
  onSubmit?: (task: TaskType) => void;
};
function KeepUpInput({ onSubmit }: Props) {
  const [addTask, setAddTask] = useState("");
  const add = useKeepUpStore((t) => t.add);

  const handleSubmit = () => {
    add(addTask);
    onSubmit && onSubmit(createTask(addTask));
    setAddTask("");
  };

  return (
    <div className="task-input">
      <input
        type="text"
        value={addTask}
        placeholder="Add new Taks..."
        onChange={(e) => {
          setAddTask(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.code === "Enter") {
            handleSubmit();
          }
        }}
      />
      <button
        type="button"
        className="task-clear"
        onClick={() => setAddTask("")}
      >
        <img src="/close.svg" alt="Close Icon" />
      </button>
    </div>
  );
}

export default KeepUpInput;
