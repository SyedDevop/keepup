import { useState } from "react";
import CheckBox from "../assets/check_box.svg?react";
import CheckBoxSelected from "../assets/check_box_selected.svg?react";
import KPIconButton from "./Ui/KPIconButton";

type Props = {
  task: string;
};

function KeepUpText({ task }: Props) {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const toggleSelected = () => {
    setIsSelected((e) => !e);
    console.log("Clied");
  };

  return (
    <div className="task-text">
      {isSelected ? (
        <KPIconButton onClick={toggleSelected}>
          <CheckBoxSelected style={{ fill: "#1abc9c" }} />
        </KPIconButton>
      ) : (
        <KPIconButton onClick={toggleSelected}>
          <CheckBox style={{ fill: "#565f89" }} />
        </KPIconButton>
      )}

      <div className="task-text_action">
        <p className={isSelected ? "selected" : ""}>{task}</p>
        <div className="task-text_action-more ">
          <ul>
            <li>Edit</li>
            <li>Delete</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default KeepUpText;
