import React, { useContext } from 'react';
import  myContext  from './ContextExample';
const context=myContext();
function ChildrenComponent() {
    const [myData,setMyData]=useContext(context);
  return (
    <div onClick={()=>setMyData("new Value")} className="border text-black">Mydata={myData}</div>
  )
}

export default ChildrenComponent