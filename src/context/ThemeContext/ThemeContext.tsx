import React, { createContext, useContext, FC, useState, useMemo } from 'react';
import { ThemeContext } from './types';
import './theme.scss';

const Theme = createContext<ThemeContext>({
  theme: 'light',
  setTheme: (theme: string) => {},
});

export const ThemeContextProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const context = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  return (
    <Theme.Provider value={context}>
      <div className={`theme-${theme}`}>{children}</div>
    </Theme.Provider>
  );
};

export const useThemeContext = () => useContext(Theme);

export default ThemeContext;
