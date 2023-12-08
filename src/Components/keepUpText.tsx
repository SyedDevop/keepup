import { useState } from "react";
import CheckBox from "../assets/check_box.svg?react";
import CheckBoxSelected from "../assets/check_box_selected.svg?react";
type Props = {
  task: string;
};

const KeepUpText = ({ task }: Props) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const toggleSelected = () => {
    setIsSelected((e) => !e);
    console.log("Clied");
  };

  return (
    <div className="task-text">
      {isSelected ? (
        <button type="button" onClick={toggleSelected} className="icon-btn">
          <CheckBoxSelected style={{ fill: "#1abc9c" }} />
        </button>
      ) : (
        <button type="button" onClick={toggleSelected} className="icon-btn">
          <CheckBox style={{ fill: "#565f89" }} />
        </button>
      )}
      <p className={isSelected ? "selected" : ""}>{task}</p>
    </div>
  );
};

export default KeepUpText;
