import { useState } from "react";
import "./keepUpInput.css";

type Props = {
  onSubmit: (task: string) => void;
};
function KeepUpInput({ onSubmit }: Props) {
  const [addTask, setAddTask] = useState("");
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
            onSubmit(addTask);
            setAddTask("");
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
