import React, { useRef, useEffect, useState, use } from 'react';
import { ScrollCarousel as ScrollCarouselInstance } from 'scroll-carousel';
import 'scroll-carousel/dist/scroll.carousel.min.css';

const ScrollCarouselComponent = ({
  onReady,
  onDestroy,
  onMove,
  children,
  className,
  elementType = 'span',
  scRef,
  autoplayStart,
  ...options
}) => {
  const carouselRef = useRef(null);
  const scrollCarouselRef = useRef(null);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    const initScrollCarousel = async () => {
      const SC = (await import('scroll-carousel')).default;
      scrollCarouselRef.current = new SC(carouselRef.current, {
        ...options,
        on: { ready: onReady, destroy: onDestroy, move: onMove, speed: options.speed || 0 },
        speed: 0,
        autoplay: autoplay,
        infinite: true, // Enable infinite scrolling
      });
      if (scRef) scRef(scrollCarouselRef.current);
    };

    if (carouselRef.current) initScrollCarousel();

    return () => {
      if (scrollCarouselRef.current) {
        // scrollCarouselRef.current.destroy();
        scrollCarouselRef.current = null;
      }
    };
  }, [onReady,  onMove, scRef, options, autoplay]);

  useEffect(() => {
    const handleMouseEnter = () => {
      setAutoplay(false);
    };

    const handleMouseLeave = () => {
      setAutoplay(true);
    };

    const carouselElement = carouselRef.current;

    if (carouselElement) {
      carouselElement.addEventListener('mouseenter', handleMouseEnter);
      carouselElement.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (carouselElement) {
        carouselElement.removeEventListener('mouseenter', handleMouseEnter);
        carouselElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  useEffect(() => {
    return () => {
      if (scrollCarouselRef.current) {
        scrollCarouselRef.current.destroy();
        scrollCarouselRef.current = null;
      }
    };
  },[onDestroy])

  return React.createElement(
    elementType,
    {
      style: { width: '100%' },
      className: className,
      ref: carouselRef,
    },
    children
  );
};

export default ScrollCarouselComponent;
