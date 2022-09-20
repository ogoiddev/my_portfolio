import React from "react";

interface Props {
  selected: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  imgSrc: string;
}


export const Thumb = ({ selected, onClick, imgSrc }: Props) => (
  <div
    className={`embla__slide embla__slide--thumb ${
      selected ? "is-selected" : ""
    }`}
  >
    <button
      onClick={onClick}
      className="embla__slide__inner embla__slide__inner--thumb"
      type="button"
    >
      <img className="embla__slide__thumbnail" src={imgSrc} alt="A cool cat." />
    </button>
  </div>
);

