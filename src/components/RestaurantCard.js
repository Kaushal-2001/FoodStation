

export const RestaurantCard = (  {name, cuisines, lastMileTravelString, cloudinaryImageId, avgRating, costForTwo}  ) => {
  

    return(
        <div className="items-center text-start w-52 h-68 mx-3 my-3 px-2 border-solid ">
            <img className="rounded-md" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"
            + cloudinaryImageId}/>
            <h4 className="pl-1 py-0.5 font-semibold text-lg">{name}</h4>
            <h4 className="pl-1 py-0.5y text-xs ">{cuisines.join(", ")}</h4>
            <div className="flex text-xs justify-between px-1 pt-5">
            <h4>{avgRating }</h4>
            <h5>{lastMileTravelString}</h5>
            <h4>Rs {costForTwo/100} FOR TWO</h4>
            </div>
            
        </div>
        
      );
  } ; 

  