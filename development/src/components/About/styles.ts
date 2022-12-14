import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  position: absolute;
  bottom: 10%;
  right: 6%;

  height: 48vh;
  width: 36vw;
  max-width: 100%;

  padding-top: 16px;

  
  :after {
    content: '';
    
    width: 0;
    height: 0;
    display: block;
    
    border-right: 1px solid transparent;
    border-bottom: 1px solid transparent;
    
    position: absolute;
    bottom: 0;
    
    transition: 0.5s ease-out;

  }

  :hover {

    filter: brightness(1.2);
  }

  :hover:after {
    border-right: 1px solid ${props => props.theme.COLORS.BLUE_LIGHT_ARTICLE_EFFECT};
    border-bottom: 1px solid ${props => props.theme.COLORS.BLUE_LIGHT_ARTICLE_EFFECT};
    width: 220%;
    height: 32%;
  }
  
  article {
    background: linear-gradient(151deg, 
      ${ ({theme}) => theme.COLORS.ARTICLE_1 } 0%, 
      ${ ({theme}) => theme.COLORS.ARTICLE_2 } 86%, 
      ${ ({theme}) => theme.COLORS.ARTICLE_3 } 100%);
    
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    border-radius: 4px 0 0 0;
    max-width: 100%;
    min-width: 338px;

    padding: 16px;
    
    aside {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      margin-bottom: 60px;
      width: fit-content;
      z-index: 88;

      h3 {
      margin: 4px 16px;
      color: ${ ({theme}) => theme.COLORS.TEXT_ACCENT};
      }
      
      div {
        display: flex;
        
      }
    }

    h1 {
      color: ${ props => props.theme.COLORS.TEXT };
      font-size: 2.5em;
      text-align: end;
    }
    
    h2 {
      color: ${ props => props.theme.COLORS.TEXT_ACCENT };
    }
    
    span {
      color: ${ props => props.theme.COLORS.TEXT };
      max-width: 435px;
      margin: 32px 0;
    }
    
    

}`

export const LinkA = styled.a.attrs((propsA) => propsA)`

  margin: 16px 8px;
  flex: 1;
  border: 1px solid transparent;
  position: relative;

  :after {
    content: '';
    font-weight: 800;
    color: ${({ theme }) => theme.COLORS.TEXT_HOVER};

    width: 0;
    height: 0;
    background: transparent;

    position: absolute;
    bottom: -40px;
    right: 0;
    white-space: nowrap;
    padding: 4px 8px;

    
  }
  
  :hover {
    transition: all 0.3s;
    border-radius: 8px;
    border: 1px solid ${ ({ theme }) => theme.COLORS.TEXT_HOVER };
    
  }

  :hover:after {
    transition: all 0.3s;
    content: "${ propsA => propsA.id }";

    width: fit-content;
    height: fit-content;

    background: ${({theme}) => theme.COLORS.PRIMARY};


  }

  img {
    width: 32px;
    height: 32px;
    margin: 8px;
    fill: black;
  }
        
`