import { Dispatch } from 'react';

export interface ThemeContext {
  theme: string;
  setTheme: Dispatch<string>;
}
