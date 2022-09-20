import ArrowLinkDown from '../ArrowLinkDown/index';
import ArrowLinkUp from '../ArrowLinkUp';
import { Carousel } from '../Carousel';
import { ProjectsContainer } from "./styles";

const SLIDE_COUNT = 10;
const slides = Array.from(Array(SLIDE_COUNT).keys());

export default function Projects() {
  return (
    <ProjectsContainer id='projects'>
        <Carousel class='carousel' slides={slides}/>
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
