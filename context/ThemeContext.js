/* eslint-disable react/destructuring-assignment */
import { createContext, useReducer, useEffect } from 'react';

// TODO: Save to localStorage
const startingTheme = { dark: false };

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        dark: !state.dark,
      };
    default:
      return state;
  }
};

export const ThemeContext = createContext(startingTheme);

export const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, startingTheme);

  const toggleTheme = () => {
    dispatch({
      type: 'TOGGLE_THEME',
    });
  };

  // localstorage only accesible on mounted component in next
  // check if store contains preexisting preference for dark mode and load it
  useEffect(() => {
    const store = window.localStorage;
    if (window.localStorage.dark) {
      const savedDarkMode = JSON.parse(store.dark);
      if (!(savedDarkMode === state.dark)) {
        toggleTheme();
      }
    }
  }, []);

  // save to localstorage anytime dark mode preference is changed
  useEffect(() => {
    window.localStorage.setItem('dark', state.dark);
  }, [state.dark]);

  return (
    <ThemeContext.Provider value={{
      dark: state.dark,
      toggleTheme,
    }}
    >
      { props.children }
    </ThemeContext.Provider>
  );
};
