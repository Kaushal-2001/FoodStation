import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Title = () => (
    <a href = "/">
    <img className="h-28 pl-4 pt-4" alt="logo" 
     
    src="https://is1-ssl.mzstatic.com/image/thumb/Purple125/v4/f3/9c/70/f39c70e2-eba3-781a-23e8-bc6833aad783/source/512x512bb.jpg">
    </img>;
    </a >
    );

const loggedInUser = () =>{
    return(true)
}


const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className="flex justify-between items-center shadow-lg bg-orange-600 opacity-85">
            <Title /> 
            <div className="nav-items flex">
                <ul className="flex font-semibold items-center text-slate-100 ">
                    <Link to ="/">
                    <li className="px-3 rounded-md hover:transform hover:scale-110">Home</li>
                    </ Link>
                    <Link to ="/About">
                    <li className="px-3 hover:transform hover:scale-110 rounded-md">About</li>
                    </ Link>
                    <Link to ="/Contact">
                    <li className="px-3 hover:transform hover:scale-110 rounded-md">Contact</li>
                    </ Link>
                    <Link to ="/">
                    <li className="px-3 hover:transform hover:scale-110 rounded-md">Cart</li>
                    </ Link>
                    <Link to ="/Instamart">
                    <li className="px-3 hover:transform hover:scale-110 rounded-md">Instamart</li>
                    </ Link>
                </ul>
                {isLoggedIn?
                <button onClick={()=>setIsLoggedIn(false)} className="font-semibold text-white px-3 pl-7 mr-3">Logout</button>
                :(
                <button onClick={()=>setIsLoggedIn(true)} className="font-semibold text-white px-3 pl-7 mr-3">Login</button>
                )}
            </div>
      
        </div>
        )
    }  

export default Header;

