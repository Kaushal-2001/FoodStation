import React from "react";
import  ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer"; 
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact"
import RestaurantMenu from "./components/RestaurantMenu"
 
const AppLayout = () => {
  return (
  <div className="">
    <Header />
    <Outlet />
    <Footer />
  </div>
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
     }

      ],
  },
  {
    path:"/About",
    element :  <About />,
    errorElement : <Error />,
}
])
  
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);