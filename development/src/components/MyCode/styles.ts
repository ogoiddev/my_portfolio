import styled from 'styled-components';


export const MyCodeContainer = styled.div`
  /* background: radial-gradient(circle, 
    ${ ({theme}) => theme.COLORS.LINEAR_1 } 0%, 
    ${ ({theme}) => theme.COLORS.LINEAR_2 } 30%, 
    ${ ({theme}) => theme.COLORS.LINEAR_3 } 70%,
    ${ ({theme}) => theme.COLORS.LINEAR_4 } 100%); */
    
    min-height: 100vh;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 64px;

    .header {
      height: 36px;
      width: 100%;
      background-color: black;
      text-align: center;
      padding: 8px 0;
      color: #aeaeae;
    }
    
    .codes {
    margin-top: 180px;
    display: flex;
    justify-content: space-evenly;
    
    gap: 0 64px;
    max-width: 90%;
    min-height: 50vh;
    flex-wrap: wrap;

    position: relative;

    img {
      max-width: 90%;
      max-height: 400px;

    }
  
    img:nth-child(1) {
      
    }

    img:nth-child(2) {
      margin-top: 64px;
    }

  }

  .arrow-code-position {
    position: absolute;
    bottom: 160px;
    left: 30px;
  }
`


export const FooterPage = styled.div`
  background: ${props => props.theme.COLORS.GRAY_BLACK};
  width: 100%;
  height: 70vh;
`