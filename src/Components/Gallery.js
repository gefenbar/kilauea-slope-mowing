import React, { useState, useEffect } from "react";

export default function Gallery() {
  const [current, setCurrent] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const isMobile = window.innerWidth <= 768;
  
  const media = [
    
    { src: "./new-images/mowing-with-view2.jpeg", isVideo: false },
    { src: "./new-images/mowing-with-view1.jpeg", isVideo: false },
    { src: "./new-images/mowing-with-view3.jpeg", isVideo: false },
    { src: "./new-images/mowing3.jpeg", isVideo: false },
    { src: "./new-images/after2.mp4", isVideo: true },
    { src: "./new-images/after3.webp", isVideo: false },
    { src: "./new-images/before2.mp4", isVideo: true },
    { src: "./new-images/before3.webp", isVideo: false },
    { src: "./new-images/driving.mp4", isVideo: true },
    { src: "./new-images/mower1.jpeg", isVideo: false },
    { src: "./new-images/mower2.jpeg", isVideo: false },
    { src: "./new-images/mower2.webp", isVideo: false },
    { src: "./new-images/mower3.mp4", isVideo: true },
    // { src: "./new-images/mowing-hero.webp", isVideo: false },
    { src: "./new-images/mowing1.mp4", isVideo: true },
    { src: "./new-images/mowing2.jpeg", isVideo: false },
    { src: "./new-images/mowing4.jpeg", isVideo: false },
    { src: "./new-images/mowing5.mp4", isVideo: true },
  ];

  useEffect(() => {
    setIsLoading(true);
    const nextIndex = (current + 1) % media.length;
    const nextMedia = isMobile ? media[nextIndex].mobileSrc : media[nextIndex].src;

    if (nextMedia) {
      const preloadMedia = (url, isVideo) => {
        const element = isVideo ? document.createElement("video") : new Image();

        element.onload = () => {
          setIsLoading(false);
        };
        element.src = url;
      };
      preloadMedia(nextMedia, media[nextIndex].isVideo);
    }
  }, [current, isMobile, media]);

  const handleNext = () => {
    setCurrent((prevCurrent) => (prevCurrent === media.length - 1 ? 0 : prevCurrent + 1));
  };

  const handlePrev = () => {
    setCurrent((prevCurrent) => (prevCurrent === 0 ? media.length - 1 : prevCurrent - 1));
  };

  return (
    <section className="gallery" id="gallery">
      <h2 className="section-title">Gallery</h2>
      <div id="gallery-wrapper">
        <button onClick={handleNext} className="nav-button next-button">
          {">"}
        </button>
        <div className="image-wrapper">
          {isLoading && <div className="loading-text">Loading...</div>}
          {media[current].isVideo ? (
            <video
              src={media[current].src}
              alt="slope mowing, mowing video"
              muted
              autoPlay
              loop
              className="gallery-image"
            />
          ) : (
            <img
              src={isMobile ? media[current].mobileSrc : media[current].src}
              alt="slope mowing, mower image"
              className="gallery-image"
            />
          )}
        </div>
        <button onClick={handlePrev} className="nav-button prev-button">
          {"<"}
        </button>
      </div>
    </section>
  );
}
