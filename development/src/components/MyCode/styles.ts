import styled from 'styled-components';


export const MyCodeContainer = styled.div`
  background: radial-gradient(circle, 
    ${ ({theme}) => theme.COLORS.LINEAR_1 } 0%, 
    ${ ({theme}) => theme.COLORS.LINEAR_2 } 30%, 
    ${ ({theme}) => theme.COLORS.LINEAR_3 } 70%,
    ${ ({theme}) => theme.COLORS.LINEAR_4 } 100%);
    
    height: 100vh;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

  .codes {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    gap: 0 32px;
    padding: 60px 0;
    width: 90%;
    height: 80%;
    flex-wrap: wrap;

    
    position: relative;
  
    img:first-child {
      max-width: 90%;
      max-height: 500px;
      
    }

    img:nth-child(2) {
      max-width: 90%;     
      max-height: 500px;
      margin-top: 60px;
    }
  }




  .arrow-code-position {
    position: absolute;
    bottom: 160px;
    left: 30px;
  }
`