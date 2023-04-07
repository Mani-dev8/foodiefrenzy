import React, { useState, useEffect } from "react";
import {toast} from 'react-toastify';
import {useNavigate} from 'react-router-dom'
import {
  useDispatchContext,
  useStateContext,
} from "../components/ContextReducer";
import EmptyCart from "../components/EmptyCart";
function Cart({ onClose }) {
  const navigate = useNavigate();
  const dispatch = useDispatchContext();
  const data = useStateContext();
  console.log("🚀 ~ file: Cart.jsx:10 ~ Cart ~ data  ~   :", data)
  const removeDispatch=async(index,name)=>{
    console.log(index)
    await dispatch({type:"REMOVE",index:index ,data:data})
    toast(
      () => (
        <div
          style={{
            display: "flex",
            padding: "0 10px",
            gap: 10,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img
            src="https://em-content.zobj.net/source/microsoft-teams/337/slightly-smiling-face_1f642.png"
            alt="emoji"
            height={"40px"}
            width={"40px"}
          />
          <p>
            <span style={{fontWeight: 600, fontSize: "16px" }}>{name}</span>{" "}
            is removed from the cart
          </p>
        </div>
      ),
      {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        toastClassName: "max-w-[360px]",
        progressStyle: { backgroundColor: "#f1c40f" },
      }
    );
  }
  const [grandTotal, setGrandTotal] = useState(0)
  useEffect(() => {
    let total=0
    data.map((item) => {
      total=total+item.total;
    });
    setGrandTotal(total)
  }, [data])
  
const handleCheckout=()=>{
  const notAuthenticated=()=>{
    
    toast(
      () => (
        <div
          style={{
            display: "flex",
            padding: "0 10px",
            gap: 10,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img
            src="https://em-content.zobj.net/source/microsoft-teams/337/frowning-face_2639-fe0f.png"
            alt="emoji"
            height={"40px"}
            width={"40px"}
          />
          <p>
            Sorry, can't checkout{" "}
            <span style={{fontWeight: 600, fontSize: "16px" }}>
              Please sign in
            </span>
            to place order
          </p>
        </div>
      ),
      {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        toastClassName: "max-w-[360px]",
        progressStyle: { backgroundColor: "#f1c40f" },
      }
    );
    navigate('/signin')
  }
  window.localStorage.getItem("authToken")===null?notAuthenticated():navigate('/checkout')
}
const handleMinus=async(qty,index,price,name) => {
 if (qty>1) {
   await dispatch({
     type: "UPDATE",
     data: data,
     index: index,
     qty: -1,
     total: -parseInt(price),
   });
 } else {
  removeDispatch(index,name)
 }
}
 const handlePlus=async(qty,index,price) => {
  console.log("🚀 ~ file: Cart.jsx:75 ~ handlePlus ~ price   ~~~  :", price)
  if (qty<10) {
    await dispatch({
      type: "UPDATE",
      data: data,
      index: index,
      qty: 1,
      total: parseInt(price),
    });
  }
  else{
    toast(
      () => (
        <div
          style={{
            display: "flex",
            padding: "0 10px",
            gap: 10,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img
            src="https://em-content.zobj.net/source/microsoft-teams/337/worried-face_1f61f.png"
            alt="emoji"
            height={"40px"}
            width={"40px"}
          />
          <p>Sorry, can't increase qty, you have reach the max limit</p>
        </div>
      ),
      {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        toastClassName: "max-w-[360px]",
        progressStyle: { backgroundColor: "#f1c40f" },
      }
    );
  }
 }
    
// console.log("onClose==",onClosec())

  return (
    <>
      <section className="    font-poppins">
        <div className="mx-auto  px-4 sm:px-6 lg:px-8 ">
          <div className="mx-auto  relative  max-w-2xl ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              onClick={onClose}
              stroke="currentColor"
              className="w-10 h-10 absolute -top-5 bg-black -right-5 text-gray-400  hover:text-emerald-500 rounded-full cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div className="bg-black shadow-xl h-fit max-h-[90vh] overflow-x-hidden overflow-y-scroll rounded border border-zinc-600 shadow-black">
              <div className="px-4 py-6 sm:px-8 relative sm:pb-10 ">
                <div className="flex flex-row  sm:w-[calc(100%-2rem)] w-[calc(100%-1rem)]  items-center absolute  justify-between">
                  <h1 className="text-xl text-emerald-500 font-serif w-full italic font-semibold tracking-wide">
                    {data.length > 0 ? "Your Cart" : "Your Cart is Empty "}
                  </h1>
                </div>
                {data.length > 0 ? (
                  <>
                    <div className="flow-root mt-14">
                      <ul className="-my-8">
                        {data.map((item, index) => {
                          return (
                            <li
                              key={item._id}
                              className="flex  items-center space-x-2 py-6 text-left flex-row sm:space-x-5 sm:space-y-0"
                            >
                              <div className="shrink-0">
                                <img
                                  className="h-24 w-24 max-w-full rounded-lg  object-cover border border-zinc-600"
                                  src={item.img}
                                  alt=""
                                />
                              </div>

                              <div className="relative   flex flex-1 flex-col justify-between">
                                <div className="sm:col-gap-5  sm:grid sm:grid-cols-2">
                                  <div className="pr-8 sm:pr-5 flex flex-col">
                                    <p className="text-base font-semibold text-gray-100">
                                      {item.name}
                                    </p>
                                    <p className="mx-0  mb-0 text-sm text-gray-400">
                                      {item.size}
                                    </p>
                                    <p className="mx-0  mb-0 text-sm text-gray-400">
                                      ₹ {item.price}/{item.size}
                                    </p>
                                  </div>
                                  <div className=" flex mt-1 items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                                    <p className="shrink-0 w-fit text-base font-semibold text-gray-100 order-2 sm:ml-8 sm:text-right">
                                      ₹ {item.total}
                                    </p>
                                    <div className="order-1">
                                      <div className="mx-auto flex h-8 items-stretch text-gray-600">
                                        <button
                                          onClick={() => handleMinus(item.qty,index,item.price,item.name)}
                                          className="flex items-center justify-center rounded-l-md bg-emerald-500 px-4 transition hover:bg-emerald-600 hover:text-white"
                                        >
                                          -
                                        </button>
                                        <div className="flex w-full items-center justify-center bg-emerald-100 px-4 text-xs uppercase transition">
                                          {item.qty}
                                        </div>
                                        <button
                                          onClick={() =>
                                            handlePlus(item.qty,index, item.price)
                                          }
                                          className="flex items-center justify-center rounded-r-md bg-emerald-500 px-4 transition hover:bg-emerald-600 hover:text-white"
                                        >
                                          +
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                                  <div className="flex rounded text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-100">
                                    <svg
                                      className="h-5 w-5 z-10"
                                      onClick={() => removeDispatch(index,item.name)}
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                        className=""
                                      ></path>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    <div className="mt-6 border-t border-b border-zinc-600 py-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-400">Subtotal</p>
                        <p className="text-lg font-semibold text-gray-100">
                          ₹ {grandTotal}
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-400">GST 6%</p>
                        <p className="text-lg font-semibold text-gray-100">
                          ₹ {Math.round(grandTotal * 0.06 * 100) / 100}
                        </p>
                      </div>
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-100">Total</p>
                      <p className="text-2xl font-semibold text-emerald-500">
                        <span className="text-xs font-normal text-gray-400">
                          INR
                        </span>{" "}
                        {grandTotal + grandTotal * 0.06}
                      </p>
                    </div>

                    <div className="mt-6 text-center">
                      <button
                        onClick={handleCheckout}
                        type="button"
                        className="group inline-flex w-full items-center justify-center rounded-md bg-emerald-500 px-4 py-3 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-emerald-600"
                      >
                        Checkout
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="group-hover:ml-8 ml-4 h-6 w-6 transition-all"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <EmptyCart />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    
    </>
  );
}

export default Cart;
