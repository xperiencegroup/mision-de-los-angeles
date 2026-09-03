import React, {
  useEffect,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export const ModeloCarousel = forwardRef(function ModeloCarousel(
  { slides = [], onSlideChange },
  ref,
) {
  const autoplay = useRef(Autoplay({ delay: 10000, stopOnInteraction: true }));
  const [currentIndex, setCurrentIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    autoplay.current,
  ]);

  const scrollTo = (index) => emblaApi?.scrollTo(index);

  useImperativeHandle(ref, () => ({
    scrollTo,
    scrollNext: () => emblaApi?.scrollNext(),
    scrollPrev: () => emblaApi?.scrollPrev(),
    emblaApi,
  }));

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      const index = emblaApi.selectedScrollSnap();
      setCurrentIndex(index);
      onSlideChange?.(index);
    };

    emblaApi.on("select", onSelect);

    if (slides.length > 0) {
      autoplay.current.play();
    }

    return () => emblaApi.off("select", onSelect);
  }, [emblaApi, onSlideChange, slides.length]);

  return (
    <div className="flex flex-col items-center lg:items-start gap-[15px] w-full h-full">
      {/* Dots numerados */}
      <div className="flex items-start gap-[15px]">
        {slides.map((_, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`flex justify-center items-center size-[28px] text-[14px] font-basic-sans hover:cursor-pointer transition-colors ${
                !isActive
                  ? "bg-verde-confianza text-celeste-bienestar"
                  : "bg-celeste-bienestar text-verde-confianza"
              }`}
            >
              {index + 1}
            </button>
          );
        })}
      </div>

      {/* Slides */}
      <div className="embla w-full overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((slide, index) => (
            <div key={index} className="min-w-0 flex-[0_0_100%]">
              {slide}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});
