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
  const [state, setState] = React.useState();

  React.useEffect(() => {
    try {
      video.load();
      console.log(video);
    }
    catch(err) {
      console.log(err);
    }
  }, [video])

  return (
  <video controls className={styles.Video} data-testid="Video" ref={videoRef} onLoadedMetadata={state}>
    <source id="video-sourse" src={videoState.videoFile} />
  </video>
  )
}

export default Video;
