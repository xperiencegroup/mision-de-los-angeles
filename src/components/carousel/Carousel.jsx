import React, {
  useEffect,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import RowIcon from "../../assets/icons/row-icon";

export const Carousel = forwardRef(function Carousel(
  { slides = [], variant, onSlideChange },
  ref,
) {
  const autoplay = useRef(Autoplay({ delay: 10000, stopOnInteraction: true }));
  const [currentIndex, setCurrentIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    autoplay.current,
  ]);

  const scrollNext = () => emblaApi?.scrollNext();
  const scrollPrev = () => emblaApi?.scrollPrev();

  // Expone métodos/valores al padre a través del ref
  useImperativeHandle(ref, () => ({
    scrollTo: (index, jump = false) => emblaApi?.scrollTo(index, jump),
    scrollNext,
    scrollPrev,
    emblaApi, // por si necesitas acceso directo a la API completa
  }));

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      const index = emblaApi.selectedScrollSnap();
      setCurrentIndex(index);
      onSlideChange?.(index); // 👈 avisamos al padre
    };

    emblaApi.on("select", onSelect);

    autoplay.current.play();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSlideChange]);

  useEffect(() => {
    if (!emblaApi) return;

    const maxIndex = slides.length - 1;

    if (currentIndex > maxIndex) {
      emblaApi.scrollTo(0, true);
    }
  }, [slides, emblaApi, currentIndex]);

  return (
    <div className="relative embla flex flex-col justify-center w-full h-full">
      <div className="embla__viewport w-full h-full flex" ref={emblaRef}>
        <div className="embla__container flex items-end w-full h-full">
          {variant === "image" && (
            <>
              {slides.map((slide, index) => (
                <div key={index} className="embla__slide flex-[0_0_100%]">
                  <img
                    src={slide}
                    alt="Imagen del render"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </>
          )}

          {variant === "card" && (
            <>
              {slides.map((slide, index) => (
                <div key={index} className="embla__slide flex-[0_0_100%]">
                  {slide}
                </div>
              ))}
            </>
          )}
        </div>
      </div>

      {/* Arrows */}
      <div className="absolute top-0 right-1/2 translate-x-[50%] flex justify-center items-center w-[132px] h-[56px] gap-[20px]">
        <button
          onClick={scrollPrev}
          className="group flex justify-center items-center size-[56px] bg-verde-confianza hover:bg-transparent hover:cursor-pointer"
        >
          <RowIcon className="rotate-180 size-[42px] text-celeste-bienestar group-active:text-gris-profundo" />
        </button>
        <button
          onClick={scrollNext}
          className="group flex justify-center items-center size-[56px] bg-verde-confianza hover:bg-transparent hover:cursor-pointer"
        >
          <RowIcon className="size-[42px] text-celeste-bienestar group-active:text-gris-profundo" />
        </button>
      </div>
    </div>
  );
});
