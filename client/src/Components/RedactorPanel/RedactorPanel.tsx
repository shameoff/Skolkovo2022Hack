import React, { FC } from "react";
import importSrc from "@images/import.svg";
import fontSrc from "@images/font.svg";
import imageSrc from "@images/image.svg";
import exportSrc from "@images/export.svg";
import Instrument from "@Components/RedactorInstrument/Instrument";
import InputInstrument from "@Components/RedactorInstrument/InputInstrument";
import styles from "./RedactorPanel.module.scss";

interface RedactorPanelProps {}

const RedactorPanel: FC<RedactorPanelProps> = () => (
  <div
    className={styles.RedactorPanel}
    data-testid="RedactorPanel">
    <InputInstrument src={importSrc} />

    <Instrument src={fontSrc} />

    <Instrument src={imageSrc} />

    <Instrument src={exportSrc} />
  </div>
);

export default RedactorPanel;
