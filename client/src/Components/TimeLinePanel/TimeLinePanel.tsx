import Instrument from "@Components/TimeLineInstrument/TimeLineInstrument";
import React, { FC } from "react";
//import cutSrc from "@images/scissors.svg";
import cutSrcL from "@images/left.png";
import cutSrcR from "@images/right.png";
import styles from "./TimeLinePanel.module.scss";
import { useAppDispatch } from "@redux/hooks";
import { setFramesResult } from "@redux/store/timeLineSlice";

interface TimeLinePanelProps {}

const TimeLinePanel: FC<TimeLinePanelProps> = () => {
  const dispatch = useAppDispatch();
  const btnClickHandler = () => {
    dispatch(setFramesResult());
  }
 
  return (
  <div
    className={styles.TimeLinePanel}
    data-testid="TimeLinePanel">
      <div style={{display: "flex"}}>
      <Instrument dir={0} src={cutSrcL} />
      <Instrument dir={1} src={cutSrcR} />
      <button onClick={btnClickHandler}>send</button>
    </div>
  </div>
  )
}

export default TimeLinePanel;
