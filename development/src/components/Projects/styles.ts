import styled from 'styled-components';


export const ProjectsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;


  /* background-color: ${({ theme: { COLORS } }) => COLORS.GRAY_GREEN_opacity_90 }; */
    /* background: radial-gradient(circle, 
    ${ ({theme}) => theme.COLORS.LINEAR_1 } 0%, 
    ${ ({theme}) => theme.COLORS.LINEAR_2 } 30%, 
    ${ ({theme}) => theme.COLORS.LINEAR_3 } 70%,
    ${ ({theme}) => theme.COLORS.LINEAR_4 } 100%); */
  position: relative;

  .arrow-projects-position {
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 300px;
    width: fit-content;

    position: absolute;
    bottom: 160px;
    left: 30px;

  }
`