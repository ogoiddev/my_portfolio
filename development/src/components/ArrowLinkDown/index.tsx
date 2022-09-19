
import { CaretDoubleDown } from "phosphor-react";
import styled from "styled-components";

const ArrowDownContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 80px;
  width: fit-content;

  .arrowDown {
    color: ${({theme}) => theme.COLORS.ARROW };
    animation: arrowDown infinite ease-in-out 1s alternate;
    transition: all 0.1s ease-in-out;
    
  }
  :hover {
    filter: brightness(2);
    transform: scale(1.3);
  }
  
  @keyframes arrowDown {
    0% {
      transform: translateY(5px);
    }
    100% {
      transform: translateY(15px);
      border-bottom: 1px solid;
    }
  }

  @media (max-width: 820px) {
    display: none;
  }
`

export default function ArrowLinkDown() {
  return (
    <ArrowDownContainer>
      <CaretDoubleDown weight="regular" className="arrowDown" size={40}/>
    </ArrowDownContainer>
  );
}
