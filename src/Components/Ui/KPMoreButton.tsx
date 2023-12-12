import React from "react";
import MoreIcon from "@svg/more.svg?react";

type Props = {
  mainClass?: string;
  iconClass?: string;
  actionClass?: string;
  children?: React.ReactNode;
};

function KPMoreButton(props: Props) {
  return (
    <div className={"more " + props.mainClass}>
      <div className={"more-icon " + props.iconClass}>
        <MoreIcon />
      </div>
      <div className={"more-action " + props.actionClass}>{props.children}</div>
    </div>
  );
}

export default KPMoreButton;
