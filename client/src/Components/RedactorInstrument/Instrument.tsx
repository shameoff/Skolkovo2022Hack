import React, { FC } from "react";
import styles from "./Instrument.module.scss";

interface InstrumentProps {
  src: any;
}

const Instrument: FC<InstrumentProps> = ({ src }) => (
  <div
    className={styles.Instrument}
    data-testid="Instrument">
    <img
      alt="вырезать"
      className={styles.Image}
      src={src}
    />
  </div>
);

export default Instrument;
