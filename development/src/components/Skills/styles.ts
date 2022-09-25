import styled from "styled-components";

export const SkillsContainer = styled.div`
  display: flex;
  height: fit-content;
  width: 100%;
  

  min-width: 300px;
  text-align: inherit;
  padding: 24px;
  border-radius: 8px;
  transition: all 1s;

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