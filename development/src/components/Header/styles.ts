import styled from "styled-components";

export const HeaderContainer = styled.div`
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  border-radius: 0 0 16px 0;
  height: 75px;
  width: 100%;

  background-color: ${ props => props.theme.COLORS.HEADER };
  opacity: 0.9;

  img {
    height: 32px;
    margin-right: 30px;
  }

  .nav {
    display: flex;
    gap: 30px;
    align-items: center;

  }

  .theme {
    margin-left: 30px;
    border-radius: 50%;
    height: 32px;
    width: 32px;

    :hover {
      filter: brightness(2);
      transform: scale(1.1);
      transition: 0.1s;
    }

    :active {
      transform: translate(1px, 1px);
    }
  }
    .resume {
    display: flex;
    align-items: center;
    color: ${props => props.theme.COLORS.GRAY_LIGHT };
    height: 45px;
    padding: 0 16px;
    animation: resume infinite 1s ease-in-out;

    @keyframes resume {
      30% {
        color: ${props => props.theme.COLORS.GRAY_LIGHT }
      }
      100% {
        color: ${props => props.theme.COLORS.BLUE_LIGHT }
      }
    }

    appearance: none;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 600;

    position: relative;
    
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
      width: 100%;
    }

    :active {
      transform: translate(1px, 1px);
      border-radius: 4px;
      background: ${props => props.theme.COLORS.BLUE_LIGHT}10;
    }
  
  }
`