import Instrument from "@Components/TimeLineInstrument/TimeLineInstrument";
import React, { FC } from "react";
import cutSrc from "@images/scissors.svg";
import styles from "./TimeLinePanel.module.scss";

interface TimeLinePanelProps {}

const TimeLinePanel: FC<TimeLinePanelProps> = () => (
  <div
    className={styles.TimeLinePanel}
    data-testid="TimeLinePanel">
    <Instrument src={cutSrc} />
  </div>
);

export default TimeLinePanel;
