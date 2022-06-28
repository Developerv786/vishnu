import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import All_Link from './All-Component/All_Link';
import Navbar from './All-Component/Navbar';
import Navarea from './All-Component/Navarea';
import Left_Navbar from './All-Component/Left_Navbar';
import Right_Navbar from './All-Component/Right_Navbar';
import Footer from './All-Component/Footer';
import Second_Footer from './All-Component/Second_Footer';
import Mobile_Bottom_Icon from './All-Component/Mobile_Bottom_Icon';
import Sign_Up from './All-Component/Sign_Up';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <BrowserRouter>
    <Navbar/>
    <Navarea/>
    <Right_Navbar/>
    <Left_Navbar/>
    <All_Link/>
    
    <Footer/>
    <Second_Footer/>
    <Mobile_Bottom_Icon/>
  </BrowserRouter>
    
  
);

