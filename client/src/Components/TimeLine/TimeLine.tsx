import { useAppSelector } from "@redux/hooks";
import { RootState } from "@redux/store/store";
import { TimeLineState } from "@redux/store/timeLineSlice";
import React, { FC } from "react";
import styles from "./TimeLine.module.scss";

interface TimeLineProps {}

const TimeLine: FC<TimeLineProps> = () => {
  const timeLineState: TimeLineState = useAppSelector(
    (state: RootState) => state,
  );

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

    {timeLineState.duration}
  </div>
  )
};

export default TimeLine;
