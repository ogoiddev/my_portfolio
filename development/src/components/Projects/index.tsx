import ArrowLinkDown from '../ArrowLinkDown/index';
import ArrowLinkUp from '../ArrowLinkUp';
import { ProjectsContainer } from "./styles";

export default function Projects() {
  return (
    <ProjectsContainer id='projects'>
        
      <div className="arrow-projects-position">
        <a href='#hall'>
          <ArrowLinkUp/>
        </a>
        <a href='#code'>
          <ArrowLinkDown/>
        </a>
      </div>
    </ProjectsContainer>
  );
}
