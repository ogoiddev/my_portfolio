import 'styled-components';
import dark from './theme/dark';

const myThemeType = typeof dark;

declare module 'styled-components' {
  export interface DefaultTheme extends myThemeType {}
}
