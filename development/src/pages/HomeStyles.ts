import styled from 'styled-components'

export const HomeContainer = styled.div`
  background: radial-gradient(circle, 
    ${ ({theme}) => theme.COLORS.LINEAR_1 } 0%, 
    ${ ({theme}) => theme.COLORS.LINEAR_2 } 30%, 
    ${ ({theme}) => theme.COLORS.LINEAR_3 } 70%,
    ${ ({theme}) => theme.COLORS.LINEAR_4 } 100%);
  
  display: flex;
  flex-direction: column;

  height: 100vh;
  width: 100%;

    
`