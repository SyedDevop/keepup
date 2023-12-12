import { useState } from "react";

import KPIconButton from "./Ui/KPIconButton";
import KPMoreButton from "./Ui/KPMoreButton";
import CheckBox from "@svg/check_box.svg?react";
import CheckBoxSelected from "@svg/check_box_selected.svg?react";
import EditIcon from "@svg/edit.svg?react";
import DeleteIcon from "@svg/contract_delete.svg?react";

type Props = {
  task: string;
};

function KeepUpText({ task }: Props) {
  const [isSelected, setIsSelected] = useState<boolean>(false);

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
        <p className={isSelected ? "selected" : ""}>{task}</p>
        <KPMoreButton>
          <button type="button" className="char-sp">
            <EditIcon fill="#1abc9c" />
            Edit
          </button>
          <button type="button" className="char-sp">
            <DeleteIcon fill="#ff007c" />
            Delete
          </button>
          <button type="button" className="char-sp">
            <DeleteIcon fill="#ff007c" />
            Delete is it name
          </button>
        </KPMoreButton>
      </div>
    </div>
  );
}

export default KeepUpText;
