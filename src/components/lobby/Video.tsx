// import { fetchStudent, fetchVideo } from '../../util/getLobby';
import { fetchVideo } from '../../util/getLobby';
import { useState, useEffect } from 'react';

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

  useEffect(() => {
    const getVideo = async () => {
      const url: VideoUrl = await fetchVideo(name);
      setVideo(url.video);
    };

    getVideo();
  }, []);

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
        className={`w-full h-full object-cover transition-all blur absolute ${video && 'opacity-0 transition-all duration-1000'}`}
      />
      {/* Load video when videoURL is fetched */}
      {video && (
        <video
          playsInline
          autoPlay
          muted
          loop
          disablePictureInPicture
          className='aspect-video'
        >
          <source src={video} type='video/mp4' />
        </video>
      )}
    </div>
  );
}
