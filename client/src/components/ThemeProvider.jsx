import React,{useReducer,createContext,useContext} from 'react'
const ThemeContextState=createContext();
const ThemeContextDispatch=createContext();
function reducer(state,action){
    try {
        if (action.type=="change") {
            const value=state;
            return value
        }
        
    } catch (error) {
        console.error(error);
    }

}
function ThemeProvider({children}) {
    const [state,dispatch]=useReducer(false,reducer);
  return (
    <ThemeContextState.Provider value={state}>
        <ThemeContextDispatch value={dispatch}>
            {children}
        </ThemeContextDispatch>
    </ThemeContextState.Provider>
  )
}

export default ThemeProvider;
export const useDispatchThemeContext = () => useContext(ThemeContextDispatch);
export const useStateThemeContext=()=>useContext(ThemeContextState);