///<reference types="vite-plugin-svgr/client" />;

import { useEffect } from "react";

import KeepUpInput from "./Components/keepUpInput";
import "./App.css";
import "./Components/Ui/button.css";
import KeepUpList from "./Components/KeepUpList";
import { useKeepUpStore } from "@src/store/useKeepup";

function App() {
  const fetchKeepup = useKeepUpStore((t) => t.fetchKeepup);
  useEffect(() => {
    fetchKeepup();
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
