import styled from "styled-components";


export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 44px;
  position: fixed;
  bottom: 0;
  background-color: ${ props => props.theme.COLORS.HEADER };
  z-index: 88;

  @media (max-width: 820px) {
    position: relative;
  
    ::after {
      content: '@ogoiddev';
      color: white;
      font-size: 1.2rem;
      line-height: 3rem;
    }
  }

  .resume {
      z-index: 89;
      display: flex;
      align-items: center;
      color: ${props => props.theme.COLORS.GRAY_LIGHT };
      height: 90%;
      padding: 0 16px;
      animation: resume infinite 1.5s ease-in-out alternate;
      appearance: none;
      text-decoration: none;
      font-size: 0.9rem;
      font-weight: 500;
      position: relative;

    @keyframes resume {
      50% {
        color: ${props => props.theme.COLORS.GRAY_LIGHT }
      }
      100% {
        color: ${props => props.theme.COLORS.BLUE_LIGHT }
      }
    }
    
    :after {
      content: '';
      width: 0;
      height: 1px;
      display: block;
      background: ${props => props.theme.COLORS.BLUE_LIGHT};
      transition: 400ms;
      position: absolute;
      bottom: 0;
      transition: 0.3s ease-out;
    }
    :hover {
      color: ${props => props.theme.COLORS.BLUE_LIGHT}
    }
    :hover:after {
      width: 95%;
    }
    :active {
      transform: translate(1px, 1px);
      border-radius: 4px;
      background: ${props => props.theme.COLORS.BLUE_LIGHT}10;
    }
    @media (max-width: 820px) {
      display: none;
      
      
    }
  }
`