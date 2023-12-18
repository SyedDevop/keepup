///<reference types="vite-plugin-svgr/client" />;

import { useEffect } from "react";

import KeepUpInput from "./Components/keepUpInput";
import "./App.css";
import "./Components/Ui/button.css";
import KeepUpList from "./Components/KeepUpList";
import { getAllKeepups } from "./bindings";
import { useKeepUpStore } from "@src/store/useKeepup";

function App() {
  const add = useKeepUpStore((t) => t.setAllKeepup);
  const getData = async () => {
    try {
      console.log("GETTING DATA");
      const data = await getAllKeepups();
      const taskData = data.map((t) => {
        const data = {
          uid: t.uid,
          taskStatus: t["task_complete"],
          task: t.task,
        } as TaskType;
        return data;
      });
      add(taskData);
      console.log("DATA FETCHED", data);
    } catch (error) {
      console.log("ERROR", error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className=" ">
      <main className="task-body">
        <div className="container task-view">
          <KeepUpList />
        </div>
        <KeepUpInput />
      </main>
    </div>
  );
}

export default App;
