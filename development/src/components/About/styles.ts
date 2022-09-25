import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 60px;
  
  flex-wrap: no-wrap;
  width: 70%;
  height: 70%;
  
  
  article {
    min-width: 300px;
    max-width: 500px;
    text-align: inherit;
    padding: 24px;
    border-radius: 8px;
    transition: all 1s;


    
    background: linear-gradient(135deg, 
      ${ ({theme}) => theme.COLORS.ARTICLE_1 } 0%, 
      ${ ({theme}) => theme.COLORS.ARTICLE_2 } 66%, 
      ${ ({theme}) => theme.COLORS.ARTICLE_3 } 100%);

    

    :hover {
      filter: brightness(1.2);
      transition: ease-in-out 0.2s;
      transform: translateY(-1px);
      box-shadow: 1px 4px 4px ${ ({theme}) => theme.COLORS.BLUE_LIGHT};
    }
    
    span {
      font-size: 1.2rem;
      color: ${ props => props.theme.COLORS.ARTICLE_TEXT };
      line-height: 1.2;
    }
    
    h1 {
      font-size: 3rem;
      color: ${ props => props.theme.COLORS.ARTICLE_TEXT };
      margin: 64px 0;
      line-height: 3rem;
  
    }
  
    h2 {
      font-size: 2rem;
      color: ${ props => props.theme.COLORS.BLUE_LIGHT };
      margin: 16px 0;
      flex: 1;
      inline-size: auto;
    }

    
  }

  
    @media (max-width: 1336px) {
    inline-size: min-content;
    min-width: 90%;
    margin: 0;
  

    
    flex-wrap: wrap;
    justify-content: center;
  }

  aside {
    margin: 32px 0;
    h3 {
      margin: 16px 0;
      color: ${ ({theme}) => theme.COLORS.BLUE_LIGHT};
    }

    a {
      margin: 16px;
      

      img {
        padding: 4px;
        :hover {
          transition: 0.3s;
          border-radius: 8px;
          border: 1px solid aqua;
        }
      }
    }
  }



  .skills {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 50%;
    border-radius: 16px;
    
    @media (max-width: 820px) {
      inline-size: min-content;
      min-width: 90%;
      margin-top: 60px;
      flex-wrap: wrap;
    }
  }
`