
import { CaretDoubleUp } from "phosphor-react";
import styled from "styled-components";

const ArrowUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 32px;
  width: fit-content;

  .arrowUp {
    color: ${({theme}) => theme.COLORS.ARROW };
    animation: arrowUp infinite ease-in-out 1s alternate-reverse;
    transition: all 0.1s ease-in-out;
    
  }
  :hover {
    filter: brightness(2);
    transform: scale(1.3);
  }
  
  @keyframes arrowUp {
    0% {
      transform: translateY(-5px);
    }
    100% {
      transform: translateY(-15px);
      border-top: 1px solid;
    }
  }

  @media (max-width: 820px) {
    display: none;
  }
`

export default function ArrowLinkUp() {
  return (
    <ArrowUpContainer>
      <CaretDoubleUp weight="regular" className="arrowUp" size={40}/>
    </ArrowUpContainer>
  );
}
