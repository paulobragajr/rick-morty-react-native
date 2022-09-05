import ColorsRickMorty from '../model/ColorsRickMorty';
import {useColorScheme} from 'react-native';

const themeDark: ColorsRickMorty = {
  textTitle: '#ffffff',
  backgroundColor: '#000000',
  cellBackgroundColor: 'rgba(255, 255, 255, 0.15)',
  cellBackgroundColoSubContainer: '#1a1a1a',
  statusBar: 'light-content',
} as ColorsRickMorty;

const themeLight: ColorsRickMorty = {
  textTitle: '#000000',
  backgroundColor: '#ffffff',
  cellBackgroundColor: 'rgba(0, 0, 0, 0.15)',
  cellBackgroundColoSubContainer: '#f2f2f2',
  statusBar: 'dark-content',
} as ColorsRickMorty;

class RMColors {
  isDarkMode = useColorScheme() === 'dark';

  static themes: ColorsRickMorty = this.isDarkMode
    ? (themeDark as ColorsRickMorty)
    : (themeDark as ColorsRickMorty);
}
export {RMColors};
