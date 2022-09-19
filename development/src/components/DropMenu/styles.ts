import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import styled from 'styled-components';

export const IconButton = styled('button')`
  all: unset;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  color: ${({theme}) => theme.COLORS.BLUE_LIGHT };

  .menu {
    text-shadow: ${({theme}) => theme.COLORS.BLUE_LIGHT } 2px 2px;
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
  color: ${ ({theme}) => theme.COLORS.BLUE_LIGHT };
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
  color: ${ ({theme}) => theme.COLORS.ARTICLE_TEXT };
  border: 1px solid ${ ({theme}) => theme.COLORS.BLUE_LIGHT };  
  border-radius: 4px;
  padding: 4px 16px;
  margin: 24px 8px;
  position: relative;

  user-select: none;
`

export const Group = styled(DropdownMenu.Group)`
  a {

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


export const Content = styled(DropdownMenu.Content)`
  min-width: 220;
  margin-right: 68px;
  
  background: linear-gradient(135deg, 
    ${ ({theme}) => theme.COLORS.ARTICLE_1 } 0%, 
    ${ ({theme}) => theme.COLORS.ARTICLE_2 } 66%, 
    ${ ({theme}) => theme.COLORS.ARTICLE_3 } 100%);
  
  border-radius: 4px;
  padding: 8px;
  box-shadow:
    0px 10px 38px -10px rgba(22, 23, 24, 0.35), 
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
  
  @media (prefers-reduced-motion: no-preference) {
    animationDuration: 400ms;
    animationTimingFunction: cubic-bezier(0.16, 1, 0.3, 1);
    willChange: transform opacity;
    &[data-state="open"] {
      &[data-side= top ] { animation-name: slideDownAndFade };
      &[data-side= right ] { animation-name: slideLeftAndFade };
      &[data-side= bottom ] { animation-name: slideUpAndFade };
      &[data-side= left ] { animation-name: slideRightAndFade };
    }
  }

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
  
`

export const RadioItem = styled(DropdownMenu.RadioItem)`
  font-size: 2rem;
`