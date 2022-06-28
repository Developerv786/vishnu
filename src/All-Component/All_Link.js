import styels from './Css/All_Link.module.css';

import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Home from "./Home";
import Chat_On_Telegram from "./Chat_On_Telegram";
import Share from "./Share";
import Help from "./Help";
import Dashboard from './Dashboard';
import Slide from './Slide';
import Show from './Show';
import Bike_Bet from './Bet/Bike_Bet';
import Car_Bet from './Bet/Car_Bet';
import Lion_Bet from './Bet/Lion_Bet';
import Spiderman_Bet from './Bet/Spiderman_Bet';
import Aeroplane_Bet from './Bet/Aeroplane_Bet';
import Tajmahal_Bet from './Bet/Tajmahal_Bet';
import Ship_Bet from './Bet/Ship_Bet';
import Unicorn_Bet from './Bet/Unicorn_Bet';
import House_Bet from './Bet/House_Bet';
import Laptop_Bet from './Bet/Laptop_Bet';
import Sign_Up from './Sign_Up';
import Login from './Login';


function All_Link () {
    return (
        <div className={styels.All_Link}> 
        <Routes>
            <Route path="/Sign_Up" element={<Sign_Up />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Chat_On_Telegram" element={<Chat_On_Telegram />} />
            <Route path="/Share" element={<Share />} />
            <Route path="/Help" element={<Help />} />
            <Route path='Dashboard' element={<Dashboard />} />
            <Route path='Bike' element={<Bike_Bet />} />
            <Route path='Spiderman' element={<Spiderman_Bet />} />
            <Route path='House' element={<House_Bet />} />
            <Route path='Car' element={<Car_Bet />} />
            <Route path='Lion' element={<Lion_Bet />} />
            <Route path='Aeroplane' element={<Aeroplane_Bet />} />
            <Route path='Tajmahal' element={<Tajmahal_Bet />} />
            <Route path='Laptop' element={<Laptop_Bet />} />
            <Route path='Ship' element={<Ship_Bet />} />
            <Route path='Unicorn' element={<Unicorn_Bet />} />
            <Route path='show' element={<Show />} />
            <Route path="/Slide" element={<Slide />} />
            
            </Routes>
        </div>
    )
}
   

export default All_Link;

