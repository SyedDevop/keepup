///<reference types="vite-plugin-svgr/client" />;

import KeepUpInput from "./Components/keepUpInput";

import "./App.css";
import "./Components/Ui/button.css";
import KeepUpList from "./Components/KeepUpList";

function App() {
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
