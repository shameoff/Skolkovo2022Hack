import { useAppSelector } from '@redux/hooks';
import { VideoState } from "@redux/store/videoSlice";
import { RootState } from '@redux/store/store';
import React, { FC } from 'react';
import styles from './Video.module.scss';

interface VideoProps {}

const Video: FC<VideoProps> = () => {
  const videoState: VideoState = useAppSelector(
    (state: RootState) => state.video,
  );
  const videoRef = React.useRef();
  const video: HTMLVideoElement = videoRef.current!;

  React.useEffect(() => {
    try {
      video.load();
      console.log("loaded");
    }
    catch(err) {
      console.log(err);
    }
  }, [video])

  return (
  <video controls className={styles.Video} data-testid="Video" ref={videoRef}>
    <source id="video-sourse" src={videoState.videoFile} />
  </video>
  )
}

export default Video;
