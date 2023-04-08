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
    <>
      {/* <>
        
        <div className=" h-full group  relative text-zinc-900">
          <div className=" bg-white py-4 px-4 border border-emerald-500 rounded-xl group-hover:border-4  h-full shadow-2xl">
            <img
              alt=""
              src="https://www.pngall.com/wp-content/uploads/2016/05/Pizza-Download-PNG.png"
              className="aspect-square w-full "
            />
            <div className="flex border mb-10 justify-between">
              <div className="py-4 flex space-x-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                </svg>
                <p className="sm:text-lg text-xs  font-semibold  dark:text-gray-100 ">
                  Pizza
                </p>
              </div>
              <div className="py-4 pr-5">
                <p className="sm:text-lg text-xs  font-semibold  dark:text-gray-100 ">
                  
                </p>
                
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full">
            <div className="flex justify-between">
              <div className="bg-emerald-500 rounded-bl-xl border-r-4 border-t-4 border-emerald-500 rounded-tr-xl w-full  ">
                <p className="dark:text-white text-lg font-semibold ">
                  Split with
                </p>
                <div className="flex space-x-2"></div>
              </div>
              <div className=" px-2 py-2  rounded-lg w-full flex items-end">
                <button className="bg-transparent  text-white font-bold py-2 px-4 rounded-lg uppercase text-sm  shadow-xl">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
 */}
      <div className=" sm:pb-8 pb-2 w-[100%] lg:mb-0  rounded text-zinc-900 hover:shadow-xl hover:scale-105 dark:hover:bg-zinc-800  hover:z-10 dark:hover:shadow-zinc-800 border dark:border-zinc-700  transition-all relative">
        <div className="category-float absolute top-"></div>
        <div>
          <img
            alt="foodimg"
            src={props.img}
            className="w-full h-auto sm:p-8 p-2 rounded-t"
          />
        </div>
        <div className="">
          <div className="md:px-2 w-full lg:px-4   px-[2vw] flex flex-col gap-1">
            <div className="flex flex-row  items-center w-full  justify-between ">
              <h2
                style={{
                  // whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  display: "inherit",
                }}
                className="sm:text-lg text-[3vw]    dark:text-gray-100 "
              >
                {props.name}
              </h2>
              <h3 className="dark:text-gray-100 text-left font-semibold  sm:text-lg text-[3vw]   ">
                ₹ {priceRef.current || itemOptions.regular}
              </h3>
            </div>
            <div
              className="flex flex-row items-center justify-between "
              style={{}}
            >
              <div className="relative">
                <div
                  onClick={() => setIsList(!isList)}
                  className="w-auto py-2 text-left  sm:text-lg text-[3vw]  rounded  bg-transparent leading-none  dark:text-gray-100 flex items-center justify-between cursor-pointer"
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
                        className=" w-full sm:text-lg text-[3vw] font-medium  text-left hover:bg-zinc-200 dark:hover:bg-zinc-500 px-6 py-1"
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
    </>
  );
}

export default Card;

// mongoimport --uri mongodb+srv://mmanitest:PTj9F4eMq4SCD5xe@mernfoodappcluster.meg2ed8.mongodb.net/foodiefrenzy --collection foodCate --jsonArray --file "C:\Users\Programming\Desktop\MERN\foodapp\foodCategory.json"
