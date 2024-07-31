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

  // state for blurred image until video has fully loaded
  const [loading, setLoading] = useState(true);
  const [videoLoading, setVideoLoading] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  //  Fetch video and set video loading state to true
  useEffect(() => {
    const getVideo = async () => {
      const url: VideoUrl = await fetchVideo(name);
      setVideo(url.video);
      setVideoLoading(true);
    };

    getVideo();
  }, []);

  // once video loading state is true, video loading state waits until video data has loaded (readystate i 4)
  // once loaded, changes loading state of image to true, thus removing it
  useEffect(() => {
    const videoData = (vid: HTMLVideoElement) => {
      if (vid.readyState === 4) setLoading(false);
    };

    if (videoRef.current) {
      videoRef.current.addEventListener('loadeddata', () =>
        videoData(videoRef.current as HTMLVideoElement)
      );

      return () =>
        videoRef.current?.removeEventListener('loadeddata', () =>
          videoData(videoRef.current as HTMLVideoElement)
        );
    }
  }, [videoLoading]);

  return (
    <div className='aspect-video relative'>
      {/* Loading image */}
      <img
        src={imageSrc}
        alt={alt}
        decoding='async'
        loading='lazy'
        width={width}
        height={height}
        className={`w-full h-full object-cover transition-all blur absolute ${!loading && 'opacity-0 transition-all duration-1000'}`}
      />
      {/* Load video when videoURL is fetched */}
      {video && (
        <video
          ref={videoRef}
          playsInline
          autoPlay
          muted
          loop
          disablePictureInPicture
          className='aspect-video'
          id='video'
        >
          <source src={video} type='video/mp4' />
        </video>
      )}
    </div>
  );
}
