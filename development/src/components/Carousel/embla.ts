import styled from 'styled-components';


const CarouselContainer = styled.div`
  .embla {
    position: relative;
    background-color: transparent;
    padding: 20px;
    
    
    height: 80%;
    width: 90%;
    
  }

  .embla__viewport {
    overflow: hidden;
    width: 100%;
  }

  .embla__viewport.is-draggable {
    cursor: move;
    cursor: grab;
  }

  .embla__viewport.is-dragging {
    cursor: grabbing;
  }

  .embla__container {
    display: flex;
    user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -webkit-tap-highlight-color: transparent;
    margin-left: -10px;

  }
  
  .embla__slide {
    padding-left: 10px;
    min-width: 100%;
    position: relative;
  }
  
  .embla__slide__inner {
    height: 680px;
    overflow: hidden;
    position: relative;
    
    :hover {
      transform: translate(-1px, -1px);
      transition: all 0.5s ease-in-out;

      ::after {
        background: ${ ({theme}) => theme.COLORS.GRAY };
        border-radius: 4px;
        bottom: 30px;
        color: white;
        content: 'Click to GitHub - https://';
        font-size: 1rem;
        font-weight: 600;
        left: 16px;
        padding: 8px 32px;
        position: absolute;
      }
    }
  }


  .embla__slide__img {
    position: absolute;
    display: block;
    top: 50%;
    left: 50%;
    width: 100%;
    min-height: 100%;
    min-width: 100%;
    max-height: 100%;
    transform: translate(-50%, -50%);
  }

  .embla--thumb {
    padding-top: 0;
    margin-top: 42px;
    
  }

  .embla__container--thumb {
    cursor: default;
    margin-left: -8px;
  }

  .embla__slide--thumb {
    padding-left: 8px;
    min-width: 20%;

    :hover {
      filter: brightness(1.2);
      transform: scale(1.1);
      opacity: 1 !important;

    }

  }

  .embla__slide__inner--thumb {
    touch-action: manipulation;
    cursor: pointer;
    border: 0;
    outline: 0;
    margin: 0;
    padding: 0;
    height: 130px;
    width: 100%;
    background-color: transparent;
    position: relative;
    display: block;
    overflow: hidden;
      :after {
      content: '' !important;
      background: none !important;
    }
  }

  .embla__slide__thumbnail {
    position: absolute;
    opacity: 0.2;
    top: 0;
    bottom: 0;
    left: -10000%;
    right: -10000%;
    margin: auto;
    min-width: 1000%;
    min-height: 1000%;
    max-width: none;
    transform: scale(0.1);
    transition: opacity 0.2s;

    :hover {
      opacity: 1 !important;
    }
  }
  
  .embla__slide--thumb.is-selected .embla__slide__thumbnail {
    opacity: 1;

  }
`

export default CarouselContainer;