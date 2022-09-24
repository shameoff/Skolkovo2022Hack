import React, { FC } from "react";
import styles from "./TimeLineInstrument.module.scss";

interface TimeLineInstrumentProps {
  src: any;
}

const TimeLineInstrument: FC<TimeLineInstrumentProps> = ({ src }) => (
  <div
    className={styles.TimeLineInstrument}
    data-testid="TimeLineInstrument">
    <img
      alt="Добавить"
      className={styles.Image}
      src={src}
    />
  </div>
);

export default TimeLineInstrument;
