
import { CaretDoubleDown } from "phosphor-react";
import styled from "styled-components";

const ArrowContainer = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1px;
  height: 80px;
  width: 500px;
  position: absolute;
  bottom: 120px;
  left: -90px;
  animation: arrowDown infinite ease-in-out 2s alternate;

  color: ${({theme}) => theme.COLORS.ARROW };

  @keyframes arrowDown {
    0% {
      transform: translateY(5px);
    }
    100% {
      transform: translateY(15px);
    }
  }


  .arrow {
    width: 100%;
    line-height: 5px;
  }

  :hover {
      filter: brightness(2);
      transform: scale(1.1);
      transition: 0.1s ease-in-out;
    }
`

export default function ArrowAnime() {
  return (
    <ArrowContainer href='#projects'>
      <CaretDoubleDown weight="regular" className="arrow" size={60}/>
    </ArrowContainer>
  );
}
