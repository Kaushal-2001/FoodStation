import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
    const {resId} = useParams();
    const restaurant = useRestaurant(resId);
        
    if (!restaurant){
        return <Shimmer />;
    }
    return(
        <div className="flex">
            <div>
                <h1 className="font-bold p-4 text-xl">{restaurant?.name}</h1>
                <img className="m-3 shadow-md" src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
                <div className="p-4">
                <h3>{restaurant?.area}</h3>
                <h3>{restaurant?.city}</h3>
                <h3>{restaurant?.avgRating} stars</h3>
                <h3>{restaurant?.costForTwo}</h3>
                </div>
            </div>
            <div>
                <h1 className="p-5 pl-32 font-bold text-xl">Menu</h1>
                <ul className="pl-32">
                    {Object?.values(restaurant?.menu?.items).map((item)=>(<li key={item.id}>{item.name}</li>))}
                </ul>
            </div>
        </div>
    );
};
export default RestaurantMenu;