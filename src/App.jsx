import React from 'react';
import "./App.css";
import Home from "./Pages/Home/Home";
import AboutMe from "./Pages/About-me/AboutMe";
import Project from "./Pages/Project/Project";
import Service from "./Pages/Service/Service";
import Contact from './Pages/Contact/Contact';
import Career from "./Pages/Career/Career"
import{BrowserRouter,Routes,Route} from "react-router-dom";

const App = () => {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' element ={<Home/>}/>
      <Route path='/AboutMe' element ={<AboutMe/>}/>
      <Route path='/Project' element ={<Project/>}/>
      <Route path='/Career' element ={<Career/>}/>
      <Route path='/Service' element ={<Service/>}/>
      <Route path='/Contact' element ={<Contact/>}/>


     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App