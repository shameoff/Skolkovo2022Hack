import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { RootState } from "@redux/store/store";
import { setleftFrameNum, setrightFrameNum, TimeLineState } from "@redux/store/timeLineSlice";
import React, { FC } from "react";
import { useDispatch } from "react-redux";
import styles from "./TimeLine.module.scss";

interface TimeLineProps {}

const TimeLine: FC<TimeLineProps> = () => {
  const dispatch = useAppDispatch();
  const state: TimeLineState = useAppSelector(
    (state: RootState) => state.timeLine,
  );

  const [frames, setFrames] = React.useState<number[]>();

  React.useEffect(() => {
    let tempFrames = [];
    for (let i = 1; i < state.duration + 1; ++i) {
      tempFrames.push(i);
    }

    setFrames(tempFrames)
  }, [state])

  const handleFrameClick = (e: MouseEvent) => {
    /* @ts-ignore */
    const num = parseInt(e.target.innerText);
    if (state.isLeftCutting) {
      dispatch(setleftFrameNum(num))
    }

    if (state.isRightCutting) {
      dispatch(setrightFrameNum(num));
    }
  }

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
    <div style={{display: "flex", alignItems: "center", height: "80%", width: "100%"}}>
      {frames?.map((el) => <div className={styles.Frame} onClick={handleFrameClick} style={{width: 100 / frames.length + "%", height: "100%", background: "#000", border: "1px solid #fff", cursor: "pointer"}}>
        <p style={{color: "#fff"}}>{el}</p>
    </div>)}
    </div>
  </div>
  )
};

export default TimeLine;
