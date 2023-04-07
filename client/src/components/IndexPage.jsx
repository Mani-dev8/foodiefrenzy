import React,{useEffect,useState} from "react";
import BannerHero from "../example/banner";
import FoodData from "../example/FoodDataContext";
import Card from "./Card";


export default function IndexPage() {
  const [foodCategory, setFoodCategory] = useState([]);
  const [foodItems, setFoodItems] = useState([]);
  const fetchData = async ()=> {
      const response =await fetch("/cardData", {
        method: "POST",
        header: { 
          "content-type": "application/json",
        },
      });
      const data=await response.json()
      const foodItemsData=data[0];
      console.log('type of foodItemsData',typeof foodItemsData);
      window.localStorage.setItem("FoodData", JSON.stringify(foodItemsData));
      const foodCategoryData=data[1]
      setFoodCategory(foodCategoryData)
      setFoodItems(foodItemsData)
}
 useEffect(() => {
 fetchData()
 }, [])
 
  return (
    <div className=" ">
      {/* Remove py-8 */}
      <div className="">
        {/* Card 1 */}
        {foodCategory !== []
          ? foodCategory.map((data) => {
              return (
                <div
                  key={data._id}
                  className="px-4 mx-auto sm:px-8 lg:px-12  max-w-7xl md:mt-12 "
                >
                  <div className="text-lg sm:text-2xl  text-emerald-500 font-serif italic font-semibold">
                    {data.CategoryName}
                  </div>
                  <hr className="dark:border-zinc-600" />
                  <div className="text-white py-10 grid grid-row grid-cols-2  gap-1 lg:grid-cols-3 xl:grid-cols-4 sm:gap-8 xl:gap-2  place-items-center">
                    {foodItems !== []
                      ? foodItems
                          .filter(
                            (items) => items.CategoryName === data.CategoryName
                          )
                          .map((cardItems) => {
                            return (
                              <div
                                key={cardItems._id}
                                id={cardItems.name.split(" ").join("")}
                                className="w-[100%]"
                              >
                                <Card
                                  cardOptions={cardItems.options[0]}
                                  cardItems={cardItems}
                                  name={cardItems.name}
                                  img={cardItems.img}
                                  CategoryName={cardItems.CategoryName}
                                  description={cardItems.description}
                                />
                              </div>
                            );
                          })
                      : "no data"}
                  </div>
                </div>
              );
            })
          : " hello "}
        {/* Card 1 Ends */}
      </div>
      
    </div>
  );
}
