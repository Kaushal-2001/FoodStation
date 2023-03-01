import { useState, useEffect } from "react";
import { Router } from "react-router-dom";
import { restaurantList } from "../constants";
import { RestaurantCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom"


function filterData(searchInput, restaurants){
  const filterData = restaurants.filter((restaurant)=>restaurant?.data?.name.toLowerCase()?.includes(searchInput?.toLowerCase()));
  return filterData;
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const[searchInput, setSearchInput] = useState("");
  const[filteredRestaurants, setFilteredRestaurants] = useState(restaurantList);

  
  useEffect(()=>{
    getRestaurants();
  },[]);
  
  
  async function getRestaurants(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1754982&lng=77.2692503&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data.data?.cards);
  }
  if (filteredRestaurants?.length===0) return(<h1>No restaurant matches your filter</h1>);
  
  return (allRestaurants?.length === 0)?<Shimmer /> :   (
      <>
        <div className="mt-6 mb-4 flex justify-center " >
          <input 
            type="text" 
            className=" w-96 px-2 rounded-lg " 
            placeholder=" Search" 
            value={searchInput} 
            onChange={(e) => {
            setSearchInput(e.target.value);}
            }/>
        <button className="bg-orange-600 opacity-85 rounded-md pt-1 p-2 m-2 h-8 hover:bg-orange-800 hover:opacity-85 text-white " 
        onClick={() => {
          const data = filterData(searchInput, allRestaurants);
          setFilteredRestaurants(data);
        }}
        >Search</button>
        </div>
          <div className="flex flex-wrap justify-between mx-16 ">  
            {filteredRestaurants.map((restaurant) => {
              return (
              <div className="h-66 hover:transform hover:scale-105 rounded-md m-4 shadow-2xl  ">
              <Link to={"/restaurant/"+restaurant?.data.id}
              key = {restaurant.data.id}>
                <RestaurantCard  {...restaurant.data} />
              </Link>
              </div>);
              
            })}
          </div>
      </>
    )
  }

export default Body;