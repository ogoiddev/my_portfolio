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

const article1 = 'Neste projeto trabalhei com TypeScript e Node.  MySql e Sequelize. Uma programação orientada a objeto. Autenticação com JWT token, password com Bcrypt e Swagger doc. Desenvolvi uma API que armazena dados de usuários, jogos, times e fornece uma tabela de lideres ao estilo de um campeonato de futebol.';
const article2 = 'Este foi resultado de uma semana Lab com a Rocketseat. GraphQl em GraphCms com API integrada, React with Typescript e Tailwind';
const article3 = 'Este foi resultado de uma semana Lab com a Rocketseat. GraphQl em GraphCms com API integrada, React with Typescript e Tailwind';
const article4 = 'Uma API rest-full com um CRUD completo. Mysql. NodeJs. Simula um controle de estoque. Autenticação com JWT token';
const article5 = 'Mais uma semana Lab com a Rocketseat. Um projeto completo com Mobile, Web e Server. React-Native, React com Typescript, Node, Prisma e SqLite';

export const media = [media1, media2, media3, media4, media5];
export const links = [link1, link2, link3, link4, link5];
export const articles = [article1, article2, article3, article4, article5];

export const mediaByIndex = (index: number) => media[index % media.length];
export const linkByIndex = (index: number) => links[index % links.length];
export const articleByIndex = (index: number) => articles[index % links.length];
