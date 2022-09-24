import React, { FC } from "react";
import styles from "./ViewPort.module.scss";

interface ViewPortProps {}

const ViewPort: FC<ViewPortProps> = () => (
  <div
    className={styles.ViewPort}
    data-testid="ViewPort"
  />
);

export default ViewPort;
