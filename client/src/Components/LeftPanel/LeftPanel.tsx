import React, { FC } from "react";
import RedactorPanel from "@Components/RedactorPanel/RedactorPanel";
import TimeLinePanel from "@Components/TimeLinePanel/TimeLinePanel";
import styles from "./LeftPanel.module.scss";

interface LeftPanelProps {}

const LeftPanel: FC<LeftPanelProps> = () => (
  <div
    className={styles.LeftPanel}
    data-testid="LeftPanel">
    <RedactorPanel />

    <TimeLinePanel />
  </div>
);

export default LeftPanel;
