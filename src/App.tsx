///<reference types="vite-plugin-svgr/client" />;

import { useState } from "react";
import KeepUpInput from "./Components/keepUpInput";
import KeepUpText from "./Components/keepUpText";

import "./App.css";
import "./Components/Ui/button.css";

function App() {
  const [tasklist, setTasklist] = useState<string[]>([]);

  function addTaskToList(task: string) {
    setTasklist((e) => [...e, task]);
  }

  return (
    <div className=" ">
      <main className="task-body">
        <div className="container task-view">
          {tasklist.map((v, i) => (
            <KeepUpText key={i} task={v} />
          ))}
        </div>
        <KeepUpInput onSubmit={addTaskToList} />
      </main>
    </div>
  );
}

export default App;
