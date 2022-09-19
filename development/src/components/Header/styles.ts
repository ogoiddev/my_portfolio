import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 999;

  :hover {
    opacity: 111;
  }

  position: fixed;
  top: 0;
  min-height: 75px;
  width: 100%;
  background-color: ${ props => props.theme.COLORS.HEADER };
  opacity: 0.9;

  img {
    height: 32px;
    width: 32px;
  }
  
  .nav-side {
    display: flex;
    gap: 30px;
    align-items: center;
    width: fit-content;
    padding-right: 28px;
  }

  .theme {
    margin-left: 30px;
    border-radius: 50%;
    height: 32px;
    width: 32px;

    :hover {
      filter: brightness(2);
      transform: scale(1.1);
      transition: 0.1s ease-in-out;
    }

    :active {
      transform: translate(1px, 1px);
    }
}`