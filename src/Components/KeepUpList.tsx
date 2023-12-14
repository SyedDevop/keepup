import { useKeepUpStore } from "@src/store/useKeepup";
import KeepUpText from "./keepUpText";

function KeepUpList() {
  const tasklist = useKeepUpStore((task) => task.keepup);
  return tasklist.map((v) => <KeepUpText key={v.uid} task={v} />);
}

export default KeepUpList;
