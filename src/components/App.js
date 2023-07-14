// import React from "react";
//  import "bootstrap/dist/css/bootstrap.min.css";
// function App(){
//   return(
//     <div>
//       <h1 className="bg-primary">React</h1>
//       <p>hello react</p>
//     </div>
//   )
// }
// export default App
import React from "react";
import {BrowserRouter,Routes,Route, Router} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Navbar from "./components/Navbar";
function App(){
  return(
    <>
      <BrowserRouter>
        <Router>
            <Navbar/>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/About" element={<About/>}></Route>
            <Route path="/Contacts" element={<Contacts/>}></Route>
           
        </Router>
      </BrowserRouter>
    </>
  );
};
export default App