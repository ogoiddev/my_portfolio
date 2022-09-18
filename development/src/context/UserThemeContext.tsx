import { createContext, ReactNode, useState } from 'react';

type UserThemeContextProps = {
  children: ReactNode;
}

type UserThemeContextType = {
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>,
}

const initialValue = {
  theme: true,
  setTheme: () => {}
}

export const UserThemeContext = createContext<UserThemeContextType>(initialValue);

export const UserThemeContextProvider = ({ children }: UserThemeContextProps) => {
  const [theme, setTheme] = useState(initialValue.theme);

  return (
    <UserThemeContext.Provider value={ {theme, setTheme} }>
      {children}
    </UserThemeContext.Provider>
  );
};
