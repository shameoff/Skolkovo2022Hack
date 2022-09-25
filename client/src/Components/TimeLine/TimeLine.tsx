import constant from "@src/constants/constant";
import axios from "axios";
import React, { FC } from "react";
import styles from "./TimeLine.module.scss";

interface TimeLineProps {}

const TimeLine: FC<TimeLineProps> = () => {
  const [state, setState] = React.useState<any>();

  // React.useEffect(() => {
  //   axios.get(`${constant.host}/frames`).then((resp: any) => {
  //     setState(resp);
  //   })
  // }, [])

  return (
  <div
    className={styles.TimeLine}
    data-testid="TimeLine"
  >
    {/* {state!.map((buff: ArrayBuffer) => {
      return <img src={'data:image/jpeg;base64, '+ buff.toString('base64')}
    })} */}

  </div>
  )
};

export default TimeLine;
