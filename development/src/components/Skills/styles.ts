import styled from "styled-components";

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  height: fit-content;
  min-width: 300px;
  max-width: 90vw;
  width: 1118px;
  text-align: inherit;
  padding: 32px;
  border-radius: 8px;
  transition: all 1s;
  margin-bottom: 180px;

  color: ${ ({theme}) => theme.COLORS.TEXT};

    
    background: linear-gradient(151deg, 
      ${ ({theme}) => theme.COLORS.ARTICLE_1 } 0%, 
      ${ ({theme}) => theme.COLORS.ARTICLE_2 } 86%, 
      ${ ({theme}) => theme.COLORS.ARTICLE_3 } 100%);


    

    :hover {
      transition: 0.4s ease-in-out;
      transform: translateY(-1px);
      filter: brightness(1.2);
      background: ${ ({ theme }) => theme.COLORS.GRAY_BLACK };
      color: white;
    }

  h3 {
    margin: 32px 0;
  }

  section {

    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 12px;
    width: 100%;

    
    a {
      border: 1px solid transparent;
      padding: 8px;


      :hover {
        transition: 0.3s;
        border-radius: 8px;
        border: 1px solid ${ ({theme}) => theme.COLORS.TEXT_ACCENT};
      }
    }
  }

`