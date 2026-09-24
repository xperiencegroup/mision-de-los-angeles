import React, { useEffect, forwardRef, useImperativeHandle } from "react";
import useEmblaCarousel from "embla-carousel-react";

export const ModeloCarousel = forwardRef(function ModeloCarousel(
  { slides = [], onSlideChange },
  ref,
) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

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
      onSlideChange?.(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);

    return () => emblaApi.off("select", onSelect);
  }, [emblaApi, onSlideChange, slides.length]);

  return (
    <div className="embla w-full overflow-hidden" ref={emblaRef}>
      <div className="embla__container flex">
        {slides.map((slide, index) => (
          <div key={index} className="min-w-0 flex-[0_0_100%]">
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
});
