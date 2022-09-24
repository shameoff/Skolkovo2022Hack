import React, { FC } from "react";
import styles from "./TimeLine.module.scss";

interface TimeLineProps {}

const TimeLine: FC<TimeLineProps> = () => (
  <div
    className={styles.TimeLine}
    data-testid="TimeLine"
  />
);

export default TimeLine;
