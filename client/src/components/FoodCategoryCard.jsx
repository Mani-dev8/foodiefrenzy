import React, { useState } from "react";
import { Link } from "react-router-dom";
import FilterCard from "./FilterCard";
export var handleAll;
function FoodCategoryCard({name}) {
  
  const [categoryData, setCategoryData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [updatedData, setUpdatedData] = useState([]);
  const [categoryType,setCategoryType]=useState('All');
  var runTimeFilterData = [];

  let data;
  const fetchCategoryData = async () => {
    const response = await fetch("/api/filterData", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
    });
    data = await response.json();
    
    console.log("🚀 ~ file: FoodCategoryCard.jsx:22 ~ fetchCategoryData ~ data   ~~~  :", data)

    // console.log(JSON.stringify(data));
    let index = 0; 
setCategoryData(data)
    // data.map((obj) => {
    //   setCategoryData(obj);
    //   console.log("🚀 ~ file: FoodCategoryCard.jsx:29 ~ data.map ~ obj   ~~~  :", obj)
      
    // });
    const items = data;
    console.log("🚀 ~ file: FoodCategoryCard.jsx:35 ~ fetchCategoryData ~ items   ~~~  :", items)
    items.forEach((element) => {
      console.log("element", element);
    });
    items.map((item, index) => {
      item.dishes.map((dish) =>
        runTimeFilterData.push({ filterName: item.filterName, dish: dish })
      );
    });
    console.log("runTimeFilterData", runTimeFilterData);
    setFilterData(runTimeFilterData.slice(0, 16));
    setUpdatedData(runTimeFilterData.slice(0, 16));
    
    // if (data.length>0) {
    //   runTimeFilterData = data.map((item) => ({
    //     filterName: item.filterName,
    //     dishes: item.dishes,
    //   }));
    //   console.log("🚀 ~ file: FoodCategoryCard.jsx:24 ~ runTimeFilterData=data.map ~ runTimeFilterData   ~~~  :", runTimeFilterData)
    // }
  };
  const handleFilter = (event) => {
    let updatedFilterData = filterData;
    console.log("hi");
    const filterName = event.currentTarget.className.split(' ')[0];
    setCategoryType(filterName)
    document.getElementById("category").scrollIntoView({behavior:'smooth'});
    console.log("filterName-- ", filterName);

    setUpdatedData(
      updatedFilterData.filter((item) => item.filterName === filterName)
    );
    console.log(
      "🚀 ~ file: FoodCategoryCard.jsx:27 ~ React.useEffect ~ filterData :",
      filterData
    );
    console.log(
      "🚀 ~ file: FoodCategoryCard.jsx:26 ~ handleFilter ~ runTimeFilterData   ~~~  :",
      runTimeFilterData
    );
  };

  React.useEffect(() => {
    fetchCategoryData();
    handleAll = function handleAllData(
      filterData,
      setUpdatedData,
      setCategoryType
    ) {
      setUpdatedData(filterData);
      document
        .getElementById("category")
        .scrollIntoView({ behavior: "smooth" });
      setCategoryType("All");
    };
  }, []);
  
  return (
    <>
      {categoryData !== [] ? (
        <>
          <div className=" rounded-lg mt-12 sm:mt-20 dark:text-white">
            <div className="flex flex-row items-center  mb-8 sm:mb-12 justify-between">
              <h2 className="text-lg sm:text-2xl  text-emerald-500 font-serif italic font-semibold">
                Filter by cuisine :
              </h2>
            </div>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {categoryData.map((data) => {
                return (
                  <li key={data.filterName}>
                    <button
                      onClick={handleFilter}
                      className={`${data.filterName} block rounded-lg border overflow-hidden border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-zinc-800 transition duration-300 `}
                    >
                      <img
                        src={data.image}
                        alt="Italian cuisine"
                        className="w-full h-full object-cover object-center rounded-t-lg hover:scale-125 transition-all"
                      />
                      {/* 
                      <span className="block py-2 px-3 text-center font-medium text-gray-800 dark:text-gray-200">
                      {data.filterName}
                    </span> 
                    */}
                    </button>
                  </li>
                );
              })}
              <li className="relative group">
                <button
                  onClick={() =>
                    handleAll(filterData, setUpdatedData, setCategoryType)
                  }
                  id={"all_category"}
                  className="block rounded-lg  border overflow-hidden border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-zinc-800 transition duration-300 "
                >
                  <img
                    src={"https://iili.io/HO2sH0P.md.png"}
                    alt="Italian cuisine"
                    className="w-full h-full object-cover object-center rounded-t-lg group-hover:scale-125 transition-all"
                  />
                  <h1 className="h-full  grid content-center rounded-lg bg-zinc-900 text-emerald-100 bg-opacity-40 w-full  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl sm:text-2xl italic font-serif font-semibold ">
                    <span className="m-auto">All...</span>
                  </h1>
                </button>
              </li>
            </ul>
          </div>
          <h1
            id="category"
            className="text-lg sm:text-2xl  text-emerald-500 font-serif italic font-semibold mt-12 "
          >
            Category : &nbsp; &nbsp;{categoryType}
          </h1>
          <div className="text-white py-10 grid grid-row grid-cols-2  gap-1 lg:grid-cols-3 xl:grid-cols-4 sm:gap-8 xl:gap-2  place-items-center">
            {updatedData.map((data) => {
              return (
                <FilterCard
                  filterName={data.filterName}
                  _id={data.dish.name}
                  dish={data.dish}
                />
              );
            })}
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default FoodCategoryCard;
