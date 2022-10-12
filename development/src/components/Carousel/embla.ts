import styled from 'styled-components';


export const CarouselArticle = styled.div`
  background: ${props => props.theme.COLORS.GRAY}70;
  width: 100%;
  height: 380px;
  margin-top: 16px;
`

export const CarouselContainer = styled.div`
  display: flex;
  width: 70%;
  max-height: 80vh;

  display: flex;
  flex-direction: column;
  
  margin-top: 64px;

  .embla {
    position: relative;
    background-color: transparent;
    min-width: 820px;
  }
  
  .embla:first-child {
    padding: 38px 0;
    margin: 16px 0;
    background: #11111150;
    min-height: 350px;
    max-height: 45vh;
    
    :hover {
      transform: translate(-1px, -1px);
      transition: 0.3s ease-in-out;
      
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
  
  
  
  .embla__viewport {
    overflow: hidden;
    width: 100%;
    max-height: 100%;
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
    height: 300px;
    overflow: hidden;
    position: relative;
    
    
  }
  
  
  .embla__slide__img {
    position: absolute;
    display: block;
    top: 50%;
    left: 50%;
    max-width: 100%;
    max-height: 100%;
    transform: translate(-50%, -50%);
  }
  
  .embla--thumb {
    
  }
  
  .embla__container--thumb {
    cursor: default;
    margin-left: -8px;
  }
  
  .embla__slide--thumb {
    padding-left: 8px;
    min-width: 20%;
    
    :after {
      content: '';
      width: 0;
      height: 0;
      display: block;
      border: 0px solid ${props => props.theme.COLORS.BLUE_LIGHT};
      transition: 400ms;
      position: absolute;
      bottom: -1px;
      
      
      transition: 0.3s ease-out;

    }

    :hover:after {
      border: 1px solid ${props => props.theme.COLORS.BLUE_LIGHT};
      filter: brightness(1.2);
      width: 92%;
      height: 2px;
      background: ${props => props.theme.COLORS.BLUE_LIGHT};

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
    height: 100px;
    min-width: 100%;
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
    transform: scale(0.08);
    transition: opacity 0.2s;
    
    :hover {
      opacity: 1 !important;
    }
  }
  
  .embla__slide--thumb.is-selected .embla__slide__thumbnail {
    opacity: 1;
    
  }

  .embla__slide--thumb.is-selected:after {
    border: 1px solid ${props => props.theme.COLORS.BLUE_LIGHT};
    width: 92%;
  }
`
