import TimeLine from "@Components/TimeLine/TimeLine";
import ViewPort from "@Components/ViewPort/ViewPort";
import React, { FC } from "react";
import styles from "./Content.module.scss";

interface ContentProps {}

const Content: FC<ContentProps> = () => (
  <div
    className={styles.Content}
    data-testid="Content">
    <ViewPort />

    <TimeLine />
  </div>
);

export default Content;
