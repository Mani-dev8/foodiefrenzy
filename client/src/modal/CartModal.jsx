import React from 'react'
import ReactDom from 'react-dom';
const modalStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  zIndex: 1000,
  height: "fit-content",
  maxHeight:'90%',
  
  width: "90%",
}; 
const overlayStyle={
    position:"fixed",
    top:0,
    left:0,
    right:0,
    bottom:0,
    backgroundColor:'rgba(0,0,0,0.6)',
    zIndex:1000,
} 
function CartModal({children}) {
  // document.getElementById('root').style.overflow='hidden';
  return ReactDom.createPortal(
    <div style={overlayStyle}>
        <div style={modalStyle} className=''>
        {children}
        </div>
    </div>,
    document.getElementById('cart-root')
  )
}

export default CartModal