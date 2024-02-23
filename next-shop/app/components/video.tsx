"use client";
import { useRef, useEffect } from "react";

const YourComponent = () => {
  const videoRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null)

  ];

  useEffect(() => {
    const handleMouseEnter = (index) => () => {
      videoRefs[index].current.play();
    };

    videoRefs.forEach((videoRef, index) => {
      const video = videoRef.current;

      if (video) {
        video.addEventListener("mouseenter", handleMouseEnter(index));

        return () => {
          video.removeEventListener("mouseenter", handleMouseEnter(index));
        };
      }
    });
  }, [videoRefs]);

  return (
    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
      <div className="-m-1 flex flex-wrap md:-m-2">
        <div className="flex w-1/2 flex-wrap">
          <div className="w-1/2 p-1 md:p-2">
            <video
              controls={false}
              ref={videoRefs[0]}
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://www.apple.com/105/media/us/watch/2024/d2a1c6ed-650b-4ea0-a363-f159a768599a/anim/unity-hero/small_2x.mp4"
            ></video>
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <video
              controls={false}
              ref={videoRefs[1]}
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://www.apple.com/105/media/us/airpods/2022/dc1310af-8cb9-4218-8d40-26bbe6a1d307/anim/hero/medium_2x.mp4"
            ></video>
          </div>
          <div className="w-full p-1 md:p-2">
            <video
              controls={false}
              ref={videoRefs[2]}
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://www.apple.com/105/media/us/iphone-15/2023/434c1226-dcdc-47be-ae28-6cb67a3a5a7c/anim/design/large_2x.mp4"
            ></video>
          </div>
        </div>
        <div className="flex w-1/2 flex-wrap">
          <div className="w-full p-1 md:p-2">
            <video
              controls={false}
              ref={videoRefs[3]}
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://store.storevideos.cdn-apple.com/v1/store.apple.com/st/1705007312571/vision-pro-gallery-measure-hero-202401.mp4"
            ></video>
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <video
              controls={false}
              ref={videoRefs[4]}
              className="block h-full w-full rounded-lg object-cover object-center bg-cover"
              src="https://www.apple.com/105/media/us/ipad-pro/2022/08087f4b-7539-4b1e-ae8a-adc18f4242ae/anim/hero/small_2x.mp4"
            ></video>
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <video
              controls={false}
              ref={videoRefs[5]}
              className="block h-full w-full rounded-lg object-cover object-center bg-cover"
              src="https://www.apple.com/105/media/us/apple-watch-series-9/2023/b9bd6af6-4574-4a5a-90a6-764df91d4d7c/anim/hero/small_2x.mp4"
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourComponent;


