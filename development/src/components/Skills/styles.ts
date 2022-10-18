import styled from "styled-components";

export const SkillsContainer = styled.div`
  display: flex;
  
  justify-content: center;

  height: fit-content;
  min-width: 300px;
  max-width: 100vw;
  width: 100%;

  padding: 32px;

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
      background: ${ ({ theme }) => theme.COLORS.GRAY_BLACK };
      color: white;
    }

  h3 {
    margin: 12px 0;
    width: 100%;
  }

  section {

    display: flex;
    justify-content: space-evenly;
    
    flex-wrap: wrap;
    
    align-self: center;
    gap: 12px;
    width: 70%;
    max-height: 300px;

    @media (max-width: 820) {
      width: 100%;
    }

    
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