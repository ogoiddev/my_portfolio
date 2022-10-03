import styled from "styled-components";

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  height: fit-content;
  min-width: 300px;
  max-width: 90vw;
  width: 64vw;
  text-align: inherit;
  padding: 24px;
  border-radius: 8px;
  transition: all 1s;
  margin-bottom: 180px;

  color: ${ ({theme}) => theme.COLORS.BLUE_LIGHT};

    
    background: linear-gradient(135deg, 
      ${ ({theme}) => theme.COLORS.ARTICLE_1 } 0%, 
      ${ ({theme}) => theme.COLORS.ARTICLE_2 } 66%, 
      ${ ({theme}) => theme.COLORS.ARTICLE_3 } 100%);


    

    :hover {
      filter: brightness(1.5);
      transition: ease-in-out 0.2s;
      transform: translateY(-1px);
      box-shadow: 1px 4px 4px ${ ({theme}) => theme.COLORS.BLUE_LIGHT};
    }

  h3 {
    margin: 32px 0;
  }

  section {

    display: flex;
    
    flex-wrap: wrap;
    gap: 20px;
    width: 100%;

    
    a {
      border: 1px solid transparent;
      padding: 8px;


      :hover {
        transition: 0.3s;
        border-radius: 8px;
        border: 1px solid ${ ({theme}) => theme.COLORS.BLUE_LIGHT};
      }
    }
  }

`