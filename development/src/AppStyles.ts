import { HTMLAttributes } from 'react';
import styled, { StyledComponent } from 'styled-components';

export const AppContainer = styled.div`
  
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
  background: #70aca812;
  box-shadow: 0 0 150px #bdf6ff;
`;

