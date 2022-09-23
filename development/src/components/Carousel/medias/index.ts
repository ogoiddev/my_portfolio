import media1 from "./TFC_LeaderBorad.png";
import media2 from "./events_page.jpg";
import media3 from "./events_home_page.jpg";
import media4 from "./store_manager.jpg";
import media5 from "./nlw_web.png";

const link1 = 'https://github.com/ogoiddev/TFC_LeaderBoard';
const link2 = 'https://github.com/ogoiddev/rocketseat';
const link3 = 'https://github.com/ogoiddev/rocketseat';
const link4 = 'https://github.com/ogoiddev/store-manager-api';
const link5 = 'https://github.com/ogoiddev/NLW_Ignite_ESports/blob/main/README.md';


export const media = [media1, media2, media3, media4, media5];
export const links = [link1, link2, link3, link4, link5];
export const mediaByIndex = (index: number) => media[index % media.length];
export const linkByIndex = (index: number) => links[index % links.length];
