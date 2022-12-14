import styled, { StyledComponent } from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  /* border: 1px solid red; */
  
  background: linear-gradient(180deg,
    ${ ({theme}) => theme.COLORS.LINEAR_1 } 0%, 
    ${ ({theme}) => theme.COLORS.LINEAR_2 } 04%, 
    ${ ({theme}) => theme.COLORS.LINEAR_3 } 50%,
    ${ ({theme}) => theme.COLORS.LINEAR_4 } 85%,
    ${ ({theme}) => theme.COLORS.LINEAR_5 } 100%);
`;
interface Props {
  locate: {
    x:number,
    y:number
  }
}

export const Cursor: StyledComponent<"div", any, Props, never> = styled.div.attrs<Props>(props => ({
  style: {
    left: (props.locate.x - 20) + 'px',
    top: (props.locate.y - 20) + 'px',
  },
}))`
  z-index: 9999;
  position: fixed;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  pointer-events: none;
  scroll-behavior: none;

  background: #70aca812;
  box-shadow: 0 0 150px #bdf6ff;

  @media (max-width: 820px) {
    display: none;
  }
`;

