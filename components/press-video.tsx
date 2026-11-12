"use client";

import { useState } from "react";

type PressVideoProps = {
  src: string;
  poster: string;
  name: string;
  email: string;
};

export function PressVideo({ src, poster, name, email }: PressVideoProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="w-full">
      <div className="w-full overflow-hidden rounded-[2.4cqw] bg-stone-950">
        <video
          aria-label={`${name}宣传视频`}
          className="block aspect-[3/4] h-auto w-full object-contain"
          controls
          playsInline
          preload="metadata"
          poster={poster}
          onError={() => setFailed(true)}
        >
          <source src={src} type="video/mp4" onError={() => setFailed(true)} />
          您的浏览器不支持视频播放。
          <a href={src}>直接打开视频</a>
        </video>
      </div>
      {failed && (
        <p role="alert" className="mt-5 text-center text-sm leading-7 text-stone-600">
          视频暂时无法播放，请尝试
          <a className="mx-1 underline underline-offset-4" href={src}>
            直接打开视频
          </a>
          ，或联系
          <a className="mx-1 break-all underline underline-offset-4" href={`mailto:${email}`}>
            {email}
          </a>
          。
        </p>
      )}
    </div>
  );
}
