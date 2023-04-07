import {useState, createContext} from "react";
const MyContext=createContext()
function MyContextProvider(props){
    const [myData,setMyData]=useState("default value")
    return(
        <MyContext.Provider value={{myData,setMyData}}>
            {props.children}
        </MyContext.Provider>
    )
}
export default MyContextProvider;
export const myContext=MyContext;