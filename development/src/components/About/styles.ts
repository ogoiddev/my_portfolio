import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;

  
  article {
    min-width: 500px;
    max-width: 600px;
    margin-left: 270px;
    text-align: inherit;
    padding: 30px;
    border-radius: 8px;
    
    background: linear-gradient(135deg, 
      ${ ({theme}) => theme.COLORS.ARTICLE_1 } 0%, 
      ${ ({theme}) => theme.COLORS.ARTICLE_2 } 66%, 
      ${ ({theme}) => theme.COLORS.ARTICLE_3 } 100%);

    opacity: 0.8;

    :hover {
      filter: brightness(2.5);
      transition: ease-in-out 0.2s;
      transform: translateY(-1px);
      box-shadow: 1px 4px 4px ${ ({theme}) => theme.COLORS.BLUE_LIGHT};
    }
    
    span {
      font-size: 1.4rem;
      color: ${ props => props.theme.COLORS.ARTICLE_TEXT };
      line-height: 1.4;
    }
    
    h1 {
      font-size: 3.6rem;
      color: ${ props => props.theme.COLORS.ARTICLE_TEXT };
      margin: 64px 0;
      line-height: 3.6rem;
  
    }
  
    h2 {
      font-size: 2.6rem;
      color: ${ props => props.theme.COLORS.BLUE_LIGHT };
      margin: 16px 0;
  
    }
    
  }



  img {
    max-height: 300px;
    width: fit-content;

  }
`