import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import styled from 'styled-components';

export const IconButton = styled('button')`
  all: unset;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  color: ${({theme}) => theme.COLORS.TEXT_ACCENT };

  .menu {
    text-shadow: ${({theme}) => theme.COLORS.TEXT_ACCENT } 2px 2px;
  }

  :hover { 
    filter: brightness(2);
    transform: scale(1.1);
    transition: 0.1s ease-in-out;
  };
  
`

export const MenuContainer = styled.div`
  display: none;
  @media (max-width: 820px) {
    display: block;
  }
`

export const MyDropdownMenu = styled(DropdownMenu.Root)`
`

export const Trigger = styled(DropdownMenu.Trigger)`

`

export const Portal = styled(DropdownMenu.Portal)`

`

export const Label = styled(DropdownMenu.Label)`
  width: fit-content;
  color: ${ ({theme}) => theme.COLORS.TEXT_ACCENT };
  font-size: 1.4rem;
  line-height: 1.4;
  font-weight: 800;
  padding-left: 16px;
`

export const Item = styled(DropdownMenu.Item)`
  all: unset;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  width: 230px;
  max-width: 300px;
  color: ${ ({theme}) => theme.COLORS.ARTICLE_TEXT };
  border: 1px solid ${ ({theme}) => theme.COLORS.TEXT_ACCENT };  
  border-radius: 4px;
  padding: 16px;
  margin: 24px 0;
`

export const Group = styled(DropdownMenu.Group)`
  .link-a {
    width: fit-content;
    appearance: none;
    text-decoration: none;
  }
`

export const CheckboxItem = styled(DropdownMenu.CheckboxItem)`

`
export const ItemIndicator = styled(DropdownMenu.ItemIndicator)`

`

export const RadioGroup = styled(DropdownMenu.RadioGroup)`

`

export const RadioItem = styled(DropdownMenu.RadioItem)`
  font-size: 2rem;
`

export const Content = styled(DropdownMenu.Content)`
  background: ${ ({theme}) => theme.COLORS.GRAY_BLACK };
  
  min-width: 60%;
  max-width: fit-content;
  padding: 32px;
  
  margin: 0px auto;
  border-radius: 4px 0 0 24px;
  
  z-index: 999;


  animation-duration: 400ms;
  animation-name: slideDownAndFade;
  animation-name: slideLeftAndFade;
  animation-name: slideUpAndFade;
  animation-name: slideRightAndFade;
  @keyframes slideUpAndFade {
    0% { opacity: 0, transform translateY(2px) }
    100% { opacity: 1, transform translateY(0) }
  }
  @keyframes slideRightAndFade {
      0% { opacity: 0, transform translateX(-2px) }
      100% { opacity: 1, transform translateX(0) }
  }
  @keyframes slideDownAndFade {
      0% { opacity: 0, transform translateY(-2px) }
      100% { opacity: 1, transform translateY(0) }
  }
  @keyframes slideLeftAndFade {
      0% { opacity: 0, transform translateX(2px) }
      100% { opacity: 1, transform translateX(0) }
  }
  
  .resume {
    display: none;
  }

  .resume {
      
    @media (max-width: 820px) {
      display: block;

      
      
    }
  }
`

