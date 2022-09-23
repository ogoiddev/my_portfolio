import styled from 'styled-components';


export const MyCodeContainer = styled.div`
  background: radial-gradient(circle, 
    ${ ({theme}) => theme.COLORS.LINEAR_1 } 0%, 
    ${ ({theme}) => theme.COLORS.LINEAR_2 } 30%, 
    ${ ({theme}) => theme.COLORS.LINEAR_3 } 70%,
    ${ ({theme}) => theme.COLORS.LINEAR_4 } 100%);
  
  display: flex;
  justify-content: center;

  .codes {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 32px;
    flex-wrap: nowrap;
    
    width: 90vw;
    position: relative;
  
    img:first-child {
      width: 50%;     
      
    }
    img:nth-child(2) {
      width: 35%;     
      
    }
  }

  height: 100vh;
  width: 100%;
  padding-top: 150px;
  position: relative;



  .arrow-code-position {
    position: absolute;
    bottom: 160px;
    left: 30px;
  }
`