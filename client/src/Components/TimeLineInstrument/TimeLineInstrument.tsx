import { useAppDispatch } from "@redux/hooks";
import { setIsLeftCutting, setIsRightCutting } from "@redux/store/timeLineSlice";
import React, { FC } from "react";
import styles from "./TimeLineInstrument.module.scss";

interface TimeLineInstrumentProps {
  dir: number,
  src: any;
}

const TimeLineInstrument: FC<TimeLineInstrumentProps> = ({ dir, src }) => {
  const dispatch = useAppDispatch();
  const clickHandler = () => {
    if (dir == 0) dispatch(setIsLeftCutting(true));

    if (dir == 1) dispatch(setIsRightCutting(true));
  }
  return (
    <div
      className={styles.TimeLineInstrument}
      data-testid="TimeLineInstrument"
      onClick={clickHandler}
      >
      <img
        alt="Добавить"
        className={styles.Image}
        src={src}
      />
    </div>
  )
}

export default TimeLineInstrument;
