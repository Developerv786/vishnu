import { Link } from 'react-router-dom';
import Car from './All-Images/Dashboard-Images/Car.jpg';
import Laptop from './All-Images/Dashboard-Images/Laptop.jpg';
import Lion from './All-Images/Dashboard-Images/Lion.jpg';
import Bike from './All-Images/Dashboard-Images/Bike.jpg';
import House from './All-Images/Dashboard-Images/House.jpg';
import Tajmahal from './All-Images/Dashboard-Images/Tajmahal.jpg';
import Spiderman from './All-Images/Dashboard-Images/Spiderman.jpg';
import Unicorn from './All-Images/Dashboard-Images/Unicorn.jpg';
import Aeroplane from './All-Images/Dashboard-Images/Aeroplane.jpg';
import Ship from './All-Images/Dashboard-Images/Ship.jpg';
import styles from './Css/Dashboard.module.css';
import Slide from './Slide';

function Dashboard () {
    return (

     <> 
        <Slide/>
        <section className={styles.Dashboard}> 
      
        <div> 
          <img src={Car} />
          <Link to="/Car">  BET NOW </Link>
        </div>

        <div> 
          <img src={Bike} />
          <Link to="/Bike">  BET NOW </Link>
        </div>

        <div> 
          <img src={Ship} />
          <Link to="/Ship">  BET NOW </Link>
        </div>

        <div> 
          <img src={Spiderman} />
          <Link to="/Spiderman">  BET NOW </Link>
        </div>

        <div> 
          <img src={House} />
          <Link to="/House">  BET NOW </Link>
        </div>

        <div> 
          <img src={Aeroplane} />
          <Link to="/Aeroplane">  BET NOW </Link>
        </div>

        <div> 
          <img src={Unicorn} />
          <Link to="/Unicorn">  BET NOW </Link>
        </div>

        <div> 
          <img src={Laptop} />
          <Link to="/Laptop">  BET NOW </Link>
        </div>

        <div> 
          <img src={Tajmahal} />
          <Link to="/Tajmahal">  BET NOW </Link>
        </div>

        <div> 
          <img src={Lion} />
          <Link to="/Lion">  BET NOW </Link>
        </div>


        </section>

        </>
    )
}

export default Dashboard;