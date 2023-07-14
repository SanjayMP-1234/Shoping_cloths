import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Course from "./components/Contacts";
import Navbar from "./components/Navbar";
function App(){
  return(
    <>
      <BrowserRouter>
        <Routes>
            <Navbar/>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/" element={<About/>}></Route>
            <Route path="/" element={<Course/>}></Route>
           
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App