import React, { createContext, useContext, useReducer } from "react";
const CartDispatchContext = createContext();
const CartStateContext = createContext();
const ThemeDispatchContext = createContext();
const ThemeStateContext = createContext();

function reducer2(state2,action2){
  try {
    if (action2.type==="change") {
      console.log("working dude ",action2.value)
      console.log(state2=action2.value)
      window.localStorage.setItem("themeMode",state2)
      return state2;
    }
  } catch ( error) {
    console.error(error);
  }
}
function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        { img: action.data.img, id: action.data._id, qty: action.qty, name: action.data.name,size:action.size,total:action.total,price:action.price },
      ];
      
    case "UPDATE":
      let arrUpdate=[...action.data];
      // console.log(arrUpdate)
      arrUpdate.map((item,index)=>{ if(index===action.index){arrUpdate[index]={...item,qty:(item.qty+action.qty),total:item.total+action.total}}})  
      return arrUpdate;
    case "REMOVE":
      let arr = [...action.data];
      console.log(action.index);
      arr.splice(action.index,1);
      return arr;
    case "DROP":
      return [];
    // case "change":
    //   console.log("working change");
    default:
      console.log("error in default switch case");
  }
}
function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, []);
  const [state2, dispatch2] = useReducer(reducer2,true)
  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        <ThemeDispatchContext.Provider value={dispatch2}>
          <ThemeStateContext.Provider value={state2}>
        {children}
          </ThemeStateContext.Provider>
        </ThemeDispatchContext.Provider>
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
}
export default CartProvider;
export const useDispatchContext = () => useContext(CartDispatchContext);
export const useStateContext = () => useContext(CartStateContext);
export const useDispatchContextTheme = () => useContext(ThemeDispatchContext);
export const useStateContextTheme = () => useContext(ThemeStateContext);
