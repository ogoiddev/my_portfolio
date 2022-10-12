import React, { useState, useEffect, useCallback, ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Thumb } from "./Thumb";
import { articleByIndex, linkByIndex, mediaByIndex } from "./medias";
import { CarouselArticle, CarouselContainer } from "./embla";


import EmblaCarousel, {
  EmblaCarouselType,
  EmblaOptionsType,
  EmblaPluginType,
  EmblaEventType,
} from 'embla-carousel'

type PropType = {
  options?: EmblaOptionsType
  slides: number[]
  class: string;
}

export const Carousel = (props: PropType) => {
  const { options, slides } = props
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [mainViewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [thumbViewportRef, emblaThumbs] = useEmblaCarousel({
    containScroll: "keepSnaps",
    // selectedClass: "",
    dragFree: true
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!embla || !emblaThumbs) return;
      if (emblaThumbs.clickAllowed()) embla.scrollTo(index);
    },
    [embla, emblaThumbs]
  );

  const onSelect = useCallback(() => {
    if (!embla || !emblaThumbs) return;
    setSelectedIndex(embla.selectedScrollSnap());
    emblaThumbs.scrollTo(embla.selectedScrollSnap());
  }, [embla, emblaThumbs, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect);
  }, [embla, onSelect]);

  return (
    <CarouselContainer className={props.class}>
      
        <div className="embla ">
          <div className="embla__viewport" ref={mainViewportRef}>
            <div className="embla__container">
              {slides.map((index) => (
                <div className="embla__slide" key={index}>
                  <div  className="embla__slide__inner">
                    <a href={linkByIndex(index)} target='_blank' className="link">
                      <img
                        className="embla__slide__img"
                        src={mediaByIndex(index)}
                        alt={`${mediaByIndex(index)} - image project`}
                        />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="embla embla--thumb">
          <div className="embla__viewport" ref={thumbViewportRef}>
            <div className="embla__container embla__container--thumb">
              {slides.map((index) => (
                <Thumb
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                imgSrc={mediaByIndex(index)}
                key={index}
                />
                ))}
            </div>
          </div>
        </div>
      <CarouselArticle>
        
          <div className="content">
            <p>{articleByIndex(selectedIndex)}</p>
          </div>
        

      </CarouselArticle>
    </CarouselContainer>
  );
};

