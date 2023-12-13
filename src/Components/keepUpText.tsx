import { useState } from "react";

import KPIconButton from "./Ui/KPIconButton";
import KPMoreButton from "./Ui/KPMoreButton";
import CheckBox from "@svg/check_box.svg?react";
import CheckBoxSelected from "@svg/check_box_selected.svg?react";
import EditIcon from "@svg/edit.svg?react";
import DeleteIcon from "@svg/contract_delete.svg?react";

type Props = {
  task: TaskType;
};

// TODO: add toggleSelected to Keepup store.

function KeepUpText({ task }: Props) {
  const [isSelected, setIsSelected] = useState<boolean>(task.taskStatus);

  const toggleSelected = () => {
    setIsSelected((e) => !e);
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
        <p className={isSelected ? "selected" : ""}>{task.task}</p>
        <div className="task-text_action-more">
          <KPMoreButton>
            <button type="button" className="char-sp">
              <EditIcon fill="#1abc9c" />
              Edit
            </button>
            <button type="button" className="char-sp">
              <DeleteIcon fill="#ff007c" />
              Delete
            </button>
          </KPMoreButton>
        </div>
      </div>
    </div>
  );
}

export default KeepUpText;
