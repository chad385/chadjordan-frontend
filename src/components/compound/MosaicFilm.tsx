'use client';

import { useEffect, useState } from 'react';

const POSTER = '/media/home/mosaic-poster.webp';
const SRC = '/media/home/mosaic.mp4';
const ALT = 'Durindal MOSAIC';

/** Poster until we know motion is allowed. Reduced motion stays on the still. */
export default function MosaicFilm() {
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setPlay(!mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  if (!play) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={POSTER} alt={ALT} className="w-full h-full object-cover" />
    );
  }

  return (
    <video
      className="w-full h-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={POSTER}
      aria-label={ALT}
    >
      <source src={SRC} type="video/mp4" />
    </video>
  );
}
