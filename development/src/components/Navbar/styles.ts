import styled from 'styled-components';

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  
  width: fit-content;
  height: 110%;
  
  
  @media (max-width: 820px) {
    display: none;
    
  }
  
  a {
    display: flex;
    align-items: center;
    color: ${props => props.theme.COLORS.TEXT };
    height: 100%;
    

    padding: 0 16px;

    appearance: none;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;

    inline-size: auto;

    position: relative;
    
    :after {
      content: '';
      width: 0;
      height: 16px;
      border-radius: 4px;
      display: block;
      background: ${props => props.theme.COLORS.TEXT_HOVER};
      transition: 400ms;
      position: absolute;
      top: 0;
      left: 0;
      transition: 0.3s ease-out;
    }
    :hover {
      color: ${props => props.theme.COLORS.TEXT_HOVER}
    }

    :hover:after {
      width: 100%;
      
      :checked {
        width: 100%;
      }
    }
      
    :active {
      transform: translate(1px, 1px);
      border-radius: 4px;
      background: ${props => props.theme.COLORS.TEXT_HOVER}10;
    }


  }
`