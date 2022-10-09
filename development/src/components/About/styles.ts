import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  position: absolute;
  bottom: 16%;
  right: 8%;

  height: 58vh;
  width: 44vw;

  
  :after {
    content: '';
    width: 0;
    height: 0;
    display: block;
    border-right: 1px solid transparent;
    border-bottom: 1px solid transparent;
    transition: 400ms;
    position: absolute;
    bottom: 0;
    transition: 0.5s ease-out;

  }

  :hover:after {
    border-right: 1px solid ${props => props.theme.COLORS.BLUE_LIGHT};
    border-bottom: 1px solid ${props => props.theme.COLORS.BLUE_LIGHT};
    filter: brightness(1.2);
    width: 180%;
    height: 100%;
  }
  
  article {
    background: linear-gradient(151deg, 
      ${ ({theme}) => theme.COLORS.ARTICLE_1 } 0%, 
      ${ ({theme}) => theme.COLORS.ARTICLE_2 } 66%, 
      ${ ({theme}) => theme.COLORS.ARTICLE_3 } 100%);
    
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    
    max-width: 90%;
    max-width: 100%;

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
      color: ${ ({theme}) => theme.COLORS.BLUE_LIGHT};
      }
      
      div {
        display: flex;

        a {
          margin: 16px 8px;
          flex: 1;
          border: 1px solid transparent;
          
          :hover {
            transition: all 0.3s;
            border-radius: 8px;
            border: 1px solid ${ ({theme}) => theme.COLORS.BLUE_LIGHT };
          }
        
          img {
            width: 32px;
            height: 32px;
            margin: 8px;
          }
        }
      }
    }

    h1 {
      color: ${ props => props.theme.COLORS.ARTICLE_TEXT };
      font-size: 2.5em;
      text-align: end;
    }
    
    h2 {
      color: ${ props => props.theme.COLORS.BLUE_LIGHT };
    }
    
    span {
      color: ${ props => props.theme.COLORS.ARTICLE_TEXT };
      max-width: 435px;
      margin: 32px 0;
    }
    
    

}`