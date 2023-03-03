import { useState, useEffect } from "react";
import { Router } from "react-router-dom";
import { restaurantList, RES_API } from "../constants";
import { RestaurantCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom"
import { filterData } from "../utils/helper";
import useStatus from "../utils/useStatus";
import useOnline from "../utils/useStatus";


const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const[searchInput, setSearchInput] = useState("");
  const[filteredRestaurants, setFilteredRestaurants] = useState(restaurantList);

  
  useEffect(()=>{
    getRestaurants();
  },[]);
  
  
 async function getRestaurants(){
    const data = await fetch(RES_API);
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data.data?.cards);
 }

const isOnline = useStatus();
console.log(isOnline);
if(!isOnline){
    return <h1>YOU ARE OFFLINE!!!!</h1>;
  };


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
          <div className="flex flex-wrap mx-16 ">  
            {filteredRestaurants.map((restaurant) => {
              return (
              <div className="h-66 hover:transform hover:scale-105 rounded-md m-4 shadow-2xl mx-5  ">
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