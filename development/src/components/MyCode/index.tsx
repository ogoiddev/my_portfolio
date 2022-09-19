import ArrowLinkUp from "../ArrowLinkUp";
import { MyCodeContainer } from "./styles";


export default function MyCode() {
  return (
    <MyCodeContainer id='code'>
      <div className="arrow-code-position">
        <a href='#projects'>
          <ArrowLinkUp/>
        </a>
      </div>
    </MyCodeContainer>
  );
}
