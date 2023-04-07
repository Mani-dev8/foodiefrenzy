import React,{useReducer} from 'react';
  const initialState = { count: 0 };
  const reducer = function (state, option) {
    switch (option.type) {
      case "addition":
        return { count: state.count + 1 };
      case "subtraction":
        return { count: state.count - 1 };
      default:
        throw new Error();
    }
  };


function ReducerExample() {
    const [state, dispatch] = useReducer(initialState, reducer);  
  return (
    <div>
        Count:{state.count}
        <br />
        <button onClick={()=>dispatch({type:'addition'})}
        >+</button>
        <button onClick={()=>dispatch({type:'subtraction'})}>-</button>
    </div>
  )
}

export default ReducerExample