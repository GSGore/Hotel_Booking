//import react library from react in this js file
import React from "react"
//outlet is used to render the content to nested routes.
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
//asynchronous function also called arrow function
const Main = () => {
  return (
    <div>
        {/* rending the header, Footer & outlet component */}
        <Header />
        <Outlet />
        <Footer />
    </div>
  );
};
export default Main