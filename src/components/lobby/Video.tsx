// import { fetchStudent, fetchVideo } from '../../util/getLobby';
import { fetchVideo } from '../../util/getLobby';
import { useState, useEffect, useRef } from 'react';

type StudentInfo = {
  name: string;
  imageSrc: string;
  alt: string;
  width: number;
  height: number;
};

type VideoUrl = {
  video: string;
};

export default function Video({
  name,
  imageSrc,
  alt,
  width,
  height,
}: StudentInfo) {
  const [video, setVideo] = useState<string>();

  // TODO: state for blurred image until video has fully loaded
  // const [loading, setLoading] = useState(true);
  // const [videoLoading, setVideoLoading] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  //  Fetch video and set video loading state to true
  useEffect(() => {
    const getVideo = async () => {
      const url: VideoUrl = await fetchVideo(name);
      setVideo(url.video);
      // setVideoLoading(true);
    };

    getVideo();
  }, []);

  // once video loading state is true, video loading state waits until video data has loaded (readystate >= 3)
  // once loaded, changes loading state of image to true, thus removing it
  // useEffect(() => {
  //   const videoData = (vid: HTMLVideoElement) => {
  //     if (vid.readyState >= 3) setLoading(false);
  //   };

  //   if (videoRef.current) {
  //     videoRef.current.addEventListener('loadeddata', () =>
  //       videoData(videoRef.current as HTMLVideoElement)
  //     );

  //     return () =>
  //       videoRef.current?.removeEventListener('loadeddata', () =>
  //         videoData(videoRef.current as HTMLVideoElement)
  //       );
  //   }
  // }, [videoLoading]);

  return (
    <div className='aspect-video relative'>
      {/* Loading image */}
      <>
        {/* <img
          src={imageSrc}
          alt={alt}
          decoding='async'
          loading='lazy'
          width={width}
          height={height}
          className={`hidden lg:block w-full h-full object-cover transition-all blur absolute z-50 ${!loading && video && 'invisible opacity-0 transition-all duration-1000'}`}
        /> */}
        <img
          src={imageSrc}
          alt={alt}
          decoding='async'
          loading='lazy'
          width={width}
          height={height}
          className={`w-full h-full object-cover transition-all blur absolute z-50 ${video && 'invisible opacity-0 transition-all duration-1000'}`}
        />
      </>
      {/* Load video when videoURL is fetched */}
      {video && (
        <>
          <video
            ref={videoRef}
            playsInline
            autoPlay
            muted
            loop
            disablePictureInPicture
            controls
            className='aspect-video hidden lg:block w-full'
            id='video'
          >
            <source src={video} type='video/mp4' />
          </video>
          <video
            ref={videoRef}
            muted
            controls
            className='aspect-video lg:hidden w-full'
            id='video'
          >
            <source src={video} type='video/mp4' />
          </video>
        </>
      )}
    </div>
  );
}
