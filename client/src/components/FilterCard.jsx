import React, { useEffect, useState, useRef } from "react";
import { useStateContext } from "./ContextReducer";
import { useDispatchContext } from "./ContextReducer";
import { handleSuccessToast } from "../App";
function FilterCard({ filterName, dish, _id }) {
  const [price, setPrice] = useState(dish.options[0].half);
  const [total, setTotal] = useState(dish.options[0].half);
  const [isList, setIsList] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const data = useStateContext();
  const [size, setSize] = useState("half");
  const dispatch = useDispatchContext();

  function handlePrice(value) {
    setPrice(value);
    setSize(
      Object.keys(dish.options[0]).find((key) => dish.options[0][key] === value)
    );
    setIsList(false);
    return;
  }
  
  async function handleAddToCart() {
    handleSuccessToast({name:dish.name})
    console.log("quantity", quantity);
    console.log("price", price);
    console.log("total", total);
    console.log("data.length", data.length);
    let count = 0;

    if (data.length === 0) {
      await dispatch({
        type: "ADD",
        data: { img: dish.image, name: dish.name, _id: _id },
        price: price,
        total: total,
        size: size,
        qty: quantity,
      });
    } else {
      let setIndex;
      // data.map((item)=>console.log('item_id', item.id))
      data.filter((item,index)=>item.id===_id?(console.log('exist and index is ',setIndex=index,count++)):console.log('notexist'))
      if (count===0) {
        await dispatch({
          type: "ADD",
          data: { img: dish.image, name: dish.name, _id: _id },
          price: price,
          total: total,
          size: size,
          qty: quantity,
        });

      }else{
        await dispatch({
          type:'UPDATE',
          index:setIndex,
          data:data,
          qty:quantity,
          total:total
        })
      }
    }
  }
  function handleColapse(event) {
    setIsList(!isList);
  }
  function minus_btn(el) {
    // setQuantity(parseInt(quantity) - 1);
    console.log(quantity);
  }
  useEffect(() => {
    console.log("size", size);
    setTotal(quantity * price);
    setIsList(false);
    // console.log("dish.image", dish.image);
    // console.log("name:dish.name", dish.name);
    // console.log("_id", _id);
  }, [quantity, price]);

  return (
    <>
      <div
        id={dish.name}
        className="sm:pb-8 xl:pb-4 pb-2 w-[100%]  lg:mb-0 mb-8 rounded text-zinc-900  border dark:border-zinc-700  transition-all relative hover:shadow-xl hover:scale-105 dark:hover:bg-zinc-800  dark:hover:shadow-zinc-800"
      >
        <div className="category-float absolute top-3 left-3 rounded-full bg-emerald-500 px-3 sm:px-4 lg:px-5 text-xs sm:text-sm lg:text-base py-1 text-white dark:text-zinc-900 ">
          {filterName}
        </div>
        <div className="mt-8">
          <img
            src={dish.image}
            className="aspect-square w-full sm:p-8 p-2 rounded-t"
            alt=""
          />
        </div>
        <div className="">
          <div className="md:px-8  px-[2vw] flex flex-col gap-1">
            <div className="flex flex-row items-center w-full  justify-between ">
              <h2
                style={{
                  // whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  display: "inherit",
                }}
                className="sm:text-lg text-xs font-semibold dark:text-gray-100"
              >
                {dish.name}
              </h2>
              <h3 className="dark:text-gray-100 sm:text-xl min-w-[45px] m-auto mr-0  font-semibold">
                ₹ {price}
              </h3>
              <hr />
            </div>
            <div
              className="flex flex-row items-center justify-between "
              style={{}}
            >
              <div className="relative">
                <div
                  onClick={handleColapse}
                  className="w-auto py-2  rounded  bg-transparent text-xs font-medium leading-none  dark:text-gray-100 flex items-center justify-between cursor-pointer"
                >
                  <span className="mr-4" id="dropdown">
                    half
                  </span>
                  <div>
                    {
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
                          className={`css-i6dzq1  ${
                            isList ? "-rotate-180" : ""
                          } transition-all`}
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    }
                  </div>
                </div>

                {isList && (
                  <div className="w-auto mt-2 divide-y transition-all  dark:divide-zinc-600 dark:bg-black bg-white   dark:text-gray-100 overflow-hidden border dark:border-zinc-600 shadow rounded absolute z-50  ">
                    {Object.keys(...dish.options).map((element) => {
                      return (
                        <button
                          key={element}
                          className=" w-full text-xs font-medium  text-left hover:bg-zinc-200 dark:hover:bg-zinc-500 px-6 py-1"
                          value={dish.options[0][element]}
                          onClick={(e) => handlePrice(e.target.value)}
                        >
                          {element}
                        </button>
                      );
                    })}
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
                  <button
                    onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                    className="svg-container  dark:text-gray-100 hover:opacity-80 cursor-pointer"
                  >
                    <svg
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
                  </button>
                  <div className="text-container px-2 text-center text-xs leading-none  dark:text-gray-100">
                    {quantity}
                  </div>
                  <div
                    onClick={(e) => setQuantity(quantity + 1)}
                    className="svg-container  dark:text-gray-100 hover:opacity-80 cursor-pointer"
                  >
                    <svg
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
              className="cursor-pointer w-full active:opacity-70 bg-emerald-500 hover:opacity-90 xl:py-1.5 py-2.5 px-6 rounded-full "
              onClick={handleAddToCart}
            >
              <p className="  text-center sm:text-lg text-xs text-white ">
                Add to cart
              </p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FilterCard;
