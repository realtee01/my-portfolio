import React, { useEffect, useRef, memo } from 'react';
import Hls from 'hls.js';

const VideoPlayer = memo(({ src }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls;

    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // For Safari/iOS native support
      video.src = src;
    } else if (Hls.isSupported()) {
      // For Chrome/Firefox/Android using hls.js
      hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [src]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      <video
        ref={videoRef}
        className="w-full h-full object-cover opacity-100"
        playsInline
        autoPlay
        muted
        loop
      />
    </div>
  );
});

export default VideoPlayer;
