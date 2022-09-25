import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { VideoState } from "@redux/store/videoSlice";
import { RootState } from '@redux/store/store';
import React, { FC } from 'react';
import styles from './Video.module.scss';

interface VideoProps {}

const Video: FC<VideoProps> = () => {
  const videoState: VideoState = useAppSelector(
    (state: RootState) => state.video,
  );
  const dispatch = useAppDispatch();
  const videoRef = React.useRef();
  const video: HTMLVideoElement = videoRef.current!;
  const [state, setState] = React.useState<number>(0);

  React.useEffect(() => {
    try {
      video.load();
    }
    catch(err) {
      console.log(err);
    }
  }, [video])

  const handleMetaData = () => {
    setState(video.duration);
  }

  return (
  <video controls className={styles.Video} data-testid="Video" ref={videoRef} onLoadedMetadata={handleMetaData}>
    <source id="video-sourse" src={videoState.videoFile} />
  </video>
  )
}

export default Video;
