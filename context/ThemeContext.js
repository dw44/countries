import { createContext, useReducer } from 'react';

// TODO: Save to localStorage
const startingTheme = {
  dark: false,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        dark: !state.dark
      }
    default:
      return state;
  }
}

export const ThemeContext = createContext(startingTheme);

export const ThemeProvider = props => {
  const [state, dispatch] = useReducer(reducer, startingTheme);
  
  const toggleTheme = () => {
    dispatch({
      type: 'TOGGLE_THEME'
    });
  }

  return (
    <ThemeContext.Provider value={{
      dark: state.dark,
      toggleTheme
    }}>
      { props.children }
    </ThemeContext.Provider>
  );
}