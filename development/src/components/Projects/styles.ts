import styled from 'styled-components';


export const ProjectsContainer = styled.div`
  width: 100%;
  height: 100vh;

  background-color: ${({ theme: { COLORS }}) => COLORS.GRAY_GREEN_opacity_70 };
  position: relative;

  .arrow-projects-position {
    position: relative;
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