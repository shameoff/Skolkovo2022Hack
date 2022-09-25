import React, { FC } from "react";
import Video from "@Components/Video/Video";
import styles from "./ViewPort.module.scss";
import TimeLine from "@Components/TimeLine/TimeLine";

interface ViewPortProps {}

const ViewPort: FC<ViewPortProps> = () => (
  <div
    className={styles.ViewPort}
    data-testid="ViewPort"
  >
    <Video/>
  </div>
);

export default ViewPort;
