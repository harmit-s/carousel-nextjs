"use client"

import React, { useRef, useState, useEffect, useMemo, useCallback } from "react";
import { useSwipeable } from "react-swipeable";
import { ChevronLeft, ChevronRight, Heart, X } from "lucide-react";
import useMediaQuery from "@/useMediaQuery";
import { useLanguage } from "@/LanguageContext";
import translations from "@/translations";
import "@/styles/Carousel.scss"

const rawVideos = [
  { src: "/assets/1.mp4", title: "Whispers of Ipsum" },
  { src: "/assets/2.mp4", title: "Forest of Lorem Ipsum" },
  { src: "/assets/3.mp4", title: "Lorem Ipsum in the Wilderness" },
  { src: "/assets/4.mp4", title: "The Ipsum Tide" },
  { src: "/assets/5.mp4", title: "Echoes of Ipsum" },
  { src: "/assets/6.mp4", title: "Echoes of Lorem" },
  { src: "/assets/7.mp4", title: "Sandy Toes Lorem" },
  { src: "/assets/8.mp4", title: "Sun-kissed Lorem" },
  { src: "/assets/9.mp4", title: "Tacos in the Lorem" },
  { src: "/assets/10.mp4", title: "Lorem Ipsum" },
  { src: "/assets/11.mp4", title: "Ipsum and Lorem" },
  { src: "/assets/12.mp4", title: "Lorem in Ipsum" },
  { src: "/assets/13.mp4", title: "Day of Ipsum" },
  { src: "/assets/14.mp4", title: "Ipsum Ipsum" },
  { src: "/assets/15.mp4", title: "Evening Lorem" },
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [saved, setSaved] = useState<string[]>([]);
  const [showModal, setShowModal] = useState(false);

  const { selectedLang } = useLanguage(); 
  const t = translations[selectedLang]

  const containerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const isDesktop = useMediaQuery("(min-width: 1280px)");
  const VISIBLE_COUNT = useMemo(() => (isDesktop ? 5 : 3), [isDesktop]);

  const extendedList = useMemo(() => [...rawVideos, ...rawVideos, ...rawVideos], []);
  const baseLength = rawVideos.length;
  const virtualIndex = currentIndex + baseLength;

  const visibleVideos = useMemo(() => {
    const start = virtualIndex - 1;
    return extendedList.slice(start, start + VISIBLE_COUNT);
  }, [virtualIndex, extendedList, VISIBLE_COUNT]);

  const scrollToCenter = useCallback(() => {
    if (containerRef.current) {
      const child = containerRef.current.children[isDesktop ? 2 : 1] as HTMLElement;
      if (containerRef.current && child) {
        const scrollOffset =
          child.offsetLeft -
          containerRef.current.offsetWidth / 2 +
          child.offsetWidth / 2;

        containerRef.current.scrollTo({
          left: scrollOffset,
          behavior: "smooth",
        });
      }
    }
  }, [isDesktop]);

  useEffect(() => {
    scrollToCenter();
  }, [visibleVideos, scrollToCenter]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      const shouldBePlaying = isDesktop ? index === 2 : index === 1;
      video.muted = isMuted;
      if (shouldBePlaying) {
        if (isPlaying) void video.play().catch(() => { });
        else video.pause();
      } else {
        if (!video.paused) video.pause();
        video.currentTime = 0;
      }
    });
  }, [isPlaying, isMuted, visibleVideos, isDesktop]);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % baseLength);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + baseLength) % baseLength);
  const togglePlay = () => setIsPlaying((p) => !p);
  const toggleMute = () => setIsMuted((m) => !m);

  const toggleSave = (src: string) => {
    setSaved((prev) =>
      prev.includes(src) ? prev.filter((v) => v !== src) : [...prev, src]
    );
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <section className="carousel">
      <div className="carousel__title-container">
        <h2 className="carousel__title">
        {isDesktop ? t.carouselTitle : t.carouselTitleMobile}
        </h2>
        {isDesktop && (
          <div className="carousel__arrows">
            <button onClick={handlePrev} className="carousel__arrow carousel__arrow--prev"><ChevronLeft /></button>
            <button onClick={handleNext} className="carousel__arrow carousel__arrow--next"><ChevronRight /></button>
          </div>
        )}
        <button className="carousel__favorites-button" onClick={() => setShowModal(true)}>
           {t.favorites}
        </button>
      </div>

      <div className="carousel__wrapper" {...(!isDesktop ? swipeHandlers : {})}>
        <div className="carousel__scroller" ref={containerRef}>
          {visibleVideos.map((item, i) => {
            const isActive = isDesktop ? i === 2 : i === 1;
            const isSaved = saved.includes(item.src);
            return (
              <div className="carousel__item" key={item.src}>
                <div className="carousel__video-container">
                  <div className={`carousel__video-box ${isActive ? "carousel__video-box--active" : ""}`}>
                    <video
                      ref={(el) => {
                        videoRefs.current[i] = el;
                      }}
                      src={item.src}
                      className="carousel__video"
                      preload="metadata"
                      playsInline
                    />
                  </div>
                  <div className="carousel__controls">
                    <button onClick={() => toggleSave(item.src)}>
                      <Heart color={isSaved ? "red" : "white"} fill={isSaved ? "red" : "none"} />
                    </button>
                    {isActive && (
                      <>
                        <button onClick={togglePlay}>
                          {/*eslint-disable-next-line @next/next/no-img-element*/}
                          <img src={isPlaying ? "/assets/pause.svg" : "/assets/play.svg"} alt="Play/Pause" />
                        </button>
                        <button onClick={toggleMute}>
                          {/*eslint-disable-next-line @next/next/no-img-element*/}
                          <img src={isMuted ? "/assets/sound off.svg" : "/assets/sound on.svg"} alt="Sound Toggle" />
                        </button>
                      </>
                    )}
                  </div>
                </div>
                <p className="carousel__caption">{item.title}</p>
              </div>
            );
          })}
        </div>
        <div className="carousel__progress-bar" />
        
      </div>

      {showModal && (
        <div className="carousel__modal-overlay" onClick={() => setShowModal(false)}>
          <div className="carousel__modal" onClick={(e) => e.stopPropagation()}>
            <button className="carousel__modal-close" onClick={() => setShowModal(false)}>
              <X />
            </button>
            <h3 className="carousel__modal-title">{t.favoritesTitle}</h3>
            {saved.length === 0 ? (
              <p className="carousel__modal-empty">{t.noFavoritesMessage}</p>
            ) : (
              <div className="carousel__modal-list">
                {saved.map((src) => {
                  const videoData = rawVideos.find((v) => v.src === src);
                  return (
                    <div className="carousel__modal-item" key={src}>
                      <video src={src} muted loop preload="metadata" className="carousel__modal-thumb" />
                      <div className="carousel__modal-meta">
                        <p>{videoData?.title}</p>
                        <button onClick={() => toggleSave(src)}>
                          <Heart color="red" fill="red" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Carousel;

