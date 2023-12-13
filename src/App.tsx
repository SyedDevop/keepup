///<reference types="vite-plugin-svgr/client" />;

import { useState } from "react";
import KeepUpInput from "./Components/keepUpInput";
import KeepUpText from "./Components/keepUpText";

import "./App.css";
import "./Components/Ui/button.css";
import useKeepUpStore from "./store/useKeepup";

function App() {
  const tasklist = useKeepUpStore((task) => task.keepup);

  return (
    <div className=" ">
      <main className="task-body">
        <div className="container task-view">
          {tasklist.map((v, i) => (
            <KeepUpText key={i} task={v} />
          ))}
        </div>
        <KeepUpInput />
      </main>
    </div>
  );
}

export default App;
