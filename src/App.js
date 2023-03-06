import React, { useState, useContext } from "react";
import  ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer"; 
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact"
import RestaurantMenu from "./components/RestaurantMenu"
import Instamart from "./components/Instamart";
import UserContext from "./utils/useContext";
 
const AppLayout = () => {
  const [user, setUser] = useState(
    {
      name : "Kaushal",
      email : "apastambhakaushal@gmail.com"
    }
  )
  return (
  <UserContext.Provider value={{
    user:user,
    setUser:setUser,
  }}>
    <Header />
    <Outlet />
    <Footer />
  </UserContext.Provider>
  );
  };

  const appRouter = createBrowserRouter([
    {
      path:"/",
      element :  <AppLayout />,
      errorElement : <Error />,
      children : [
        { path:"/",
        element :  <Body />,
        
       },
       
        { path:"/About",
        element :  <About />,
        errorElement : <Error />,
       },
       
       { path:"/Contact",
       element :  <Contact />,
       errorElement : <Error />,
      },
       
      { path:"/restaurant/:resId",
      element :  <RestaurantMenu />,
     },
     
     { path:"/Instamart",
     element :  <Instamart />,
     errorElement : <Error />,
    },
      ],
  },

])
  
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);