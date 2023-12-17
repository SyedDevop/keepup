import React from "react";

import KPIconButton from "./Ui/KPIconButton";
import KPMoreButton from "./Ui/KPMoreButton";
import CheckBox from "@svg/check_box.svg?react";
import CheckBoxSelected from "@svg/check_box_selected.svg?react";
import EditIcon from "@svg/edit.svg?react";
import DeleteIcon from "@svg/contract_delete.svg?react";
import useKeepUpStore from "@src/store/useKeepup";

type Props = {
  task: TaskType;
};

function KeepUpText({ task }: Props) {
  const toggleTask = useKeepUpStore((state) => state.toggleTask);
  const toggleSelected = () => {
    toggleTask(task.uid);
  };

  return (
    <div className="task-text">
      {task.taskStatus ? (
        <KPIconButton onClick={toggleSelected}>
          <CheckBoxSelected style={{ fill: "#1abc9c" }} />
        </KPIconButton>
      ) : (
        <KPIconButton onClick={toggleSelected}>
          <CheckBox style={{ fill: "#565f89" }} />
        </KPIconButton>
      )}

      <div className="task-text_action">
        <p className={task.taskStatus ? "selected" : ""}>{task.task}</p>
        <div className="task-text_action-more">
          <KPMoreButton>
            <button type="button" className="btn-select">
              <EditIcon fill="#1abc9c" />
              Edit
            </button>
            <button type="button" className="btn-select">
              <DeleteIcon fill="#ff007c" />
              Delete
            </button>
          </KPMoreButton>
        </div>
      </div>
    </div>
  );
}

export default React.memo(KeepUpText);
