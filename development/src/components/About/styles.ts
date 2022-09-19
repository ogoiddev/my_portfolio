import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
  
  article {
    min-width: 450px;
    max-width: 600px;
    margin: 0 10% 10% 0;
    text-align: inherit;
    padding: 30px;
    border-radius: 8px;
    transition: all 1s;
    
    
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
      flex: 1;
      inline-size: auto;
    }

    @media (max-width: 820px) {
      inline-size: min-content;
      min-width: 90%;
      margin: 0;
      
    }
    
  }





  .gif {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      max-width: 80%;
    }

    width: fit-content;
    
    margin: 60px 0;
    border-radius: 16px;
    opacity: 0.5;
  }
`