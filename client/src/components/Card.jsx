import React, { useState, useEffect, useRef } from "react";
import  {handleSuccessToast}  from "../App";
import { useDispatchContext, useStateContext } from "./ContextReducer";

function Card(props) {
  let data = useStateContext();
  const [isList, setIsList] = useState(false);
  const [quantity, setQuantity] = useState(1);
  let itemOptions = props.cardOptions;
  let itemPrice = Object.keys(itemOptions);
  let dispatch = useDispatchContext();
  const [size, setSize] = useState(itemPrice[0]);
  const [total, setTotal] = useState(itemOptions.half || itemOptions.regular);
  
  const handleAddToCart = async () => {
    handleSuccessToast({ name: props.cardItems.name });
    let count = 0;
    let sizeInWholeArray=0
    if (data.length === 0) {
      console.log("empty");
      await dispatch({
        type: "ADD",
        data: props.cardItems,
        price: priceRef.current,
        qty: quantity,
        size: size,
        total: total,
        
      });
    } else {
      console.log(size);
      data.map(async (item) => {
        if (item.id === props.cardItems._id) {
          /* console.log(item.id);
          console.log(props.cardItems._id);
          console.log("same product exist"); */
          if (item.size === size) {
            count += 1;
            sizeInWholeArray+=1
            console.log("same size ");
          } 
        }
      });

      console.log(count)
      if (count===0) {
       await dispatch({
         type: "ADD",
         data: props.cardItems,
         price: priceRef.current,
         qty: quantity,
         size: size,
         total: total,
       });
    }else{
      data.map(async(item,index)=>{
          if (item.id === props.cardItems._id && item.size === size) {
        /*     console.log(priceRef.current)
            console.log(item);
            console.log("index",index);
            console.log("quantity",quantity); */
            await dispatch({
              type: "UPDATE",
              data: data,
              index: index,
              qty:quantity,
              total: total,
            });
          }
      })
     }
   }
   console.log(sizeInWholeArray)
  };

  const plusme_search = (el) => {
    // textElement.innerText = qty + 1;
    if (quantity < 10) setQuantity(() => quantity + 1);
    
  };
  const minusme_qty = (el) => {
    if (quantity > 1) setQuantity(quantity - 1);
  };
  useEffect(() => {
    setTotal(quantity * priceRef.current);
  }, [quantity]);

  let priceRef = useRef(itemOptions.half || itemOptions.regular);
  const handleOption = (e) => {
    setIsList(!isList);
    priceRef.current = itemOptions[e.target.value];
    setTotal(quantity * priceRef.current);
    /* console.log(priceRef)
    console.log(e.target.parentNode)*/
    setSize(e.target.value);
    console.log(
      (e.target.parentNode.previousElementSibling.children[0].innerText =
        e.target.value)
    );
  };

  return (
    <div className=" sm:pb-8 pb-2 w-[100%] lg:mb-0 mb-8 rounded text-zinc-900 hover:shadow-xl hover:scale-105 dark:hover:bg-zinc-800  dark:hover:shadow-zinc-800 border dark:border-zinc-700  transition-all relative">
      <div className="category-float absolute top-"></div>
      <div>
        <img
          src={props.img}
          className="w-full h-auto sm:p-8 p-2 rounded-t"
          alt=""
        />
      </div>
      <div className="">
        <div className="md:px-2  px-[2vw] flex flex-col gap-1">
          <div className="flex flex-row  items-center w-full  justify-between ">
            <h2
              style={{
                // whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
                display: "inherit",
              }}
              className="sm:text-lg text-xs  font-semibold  dark:text-gray-100 "
            >
              {props.name}
            </h2>
            <h3
             
              className="dark:text-gray-100 sm:text-xl min-w-[41px] m-auto mr-0  font-semibold"
            >
              ₹ {priceRef.current || itemOptions.regular}
            </h3>
            <hr />
          </div>
          <div
            className="flex flex-row items-center justify-between "
            style={{}}
          >
            <div className="relative">
              <div
                onClick={() => setIsList(!isList)}
                className="w-auto py-2  rounded  bg-transparent text-xs font-medium leading-none  dark:text-gray-100 flex items-center justify-between cursor-pointer"
              >
                <span className="mr-4" id="dropdown">
                  {itemPrice[0]}
                </span>
                <div>
                  {isList ? (
                    <div>
                      <svg
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="css-i6dzq1"
                      >
                        <polyline points="18 15 12 9 6 15"></polyline>
                      </svg>
                    </div>
                  ) : (
                    <div>
                      <svg
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="css-i6dzq1 dark:text-white"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {isList && (
                <div className="w-auto mt-2 divide-y transition-all  dark:divide-zinc-600 dark:bg-black bg-white   dark:text-gray-100 overflow-hidden border dark:border-zinc-600 shadow rounded absolute z-50  ">
                  {itemPrice.map((element) => (
                    <button
                      key={element}
                      className=" w-full text-xs font-medium  text-left hover:bg-zinc-200 dark:hover:bg-zinc-500 px-6 py-1"
                      value={element}
                      onClick={handleOption}
                    >
                      {element}
                    </button>
                  ))}
                </div>
              )}
              <style>
                {`.checkbox:checked + .check-icon {
                display: flex;
            }`}
              </style>
            </div>

            <div className="flex flex-row  items-center justify-center ">
              <label className="text-xs hidden sm:block font-medium leading-none  dark:text-gray-100 text-center pr-2">
                Qty
              </label>
              <div className="flex flex-row items-center   rounded ">
                <div className="svg-container  dark:text-gray-100 hover:opacity-80 cursor-pointer">
                  <svg
                    onClick={minusme_qty}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="text-container px-2 text-center text-xs leading-none  dark:text-gray-100">
                  {quantity}
                </div>
                <div className="svg-container  dark:text-gray-100 hover:opacity-80 cursor-pointer">
                  <svg
                    onClick={plusme_search}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="dark:border-zinc-600  border-b  "></div>

          <div className="total flex flex-row justify-between items-center">
            <span className="sm:text-lg text-xs  dark:text-gray-100 font-semibold">
              Total
            </span>
            <span className="sm:text-2xl text-xl text-emerald-500 font-bold">
              ₹ {total}
            </span>
          </div>
          <button
            className="cursor-pointer w-full active:opacity-70 bg-emerald-500 hover:opacity-90 py-2.5 px-6 rounded-full "
            onClick={handleAddToCart}
          >
            <p className="  text-center sm:text-lg text-xs text-white">
              Add to cart
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;

// mongoimport --uri mongodb+srv://mmanitest:PTj9F4eMq4SCD5xe@mernfoodappcluster.meg2ed8.mongodb.net/foodiefrenzy --collection foodCate --jsonArray --file "C:\Users\Programming\Desktop\MERN\foodapp\foodCategory.json"
