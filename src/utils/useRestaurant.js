import { useState, useEffect } from "react";
import { MENU_URL } from "../constants";

const useRestaurant = (resId) => {
    const [restaurant, setRestaurant] = useState(null);
    useEffect(() => {
        getRestaurantInfo();
    },[]);    
        
    async function getRestaurantInfo(){
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    setRestaurant(json.data);
};
return restaurant;
};

export default useRestaurant;