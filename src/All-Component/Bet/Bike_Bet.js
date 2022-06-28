import styles from '../Css/Bet.module.css';
import ComputerBike from '../Bet-Images-Computer/ComputerBike.jpg';
import MobileBike from '../Bet-Images-Mobile/MobileBike.jpg';


function Bike_Bet () {
    return (
    //    bet area code here start 

        <div className={styles.bet_background}>
        
        <div className={styles.bet_back}>
            <div  className={styles.bet_image}>
            <img src={ComputerBike} alt="Bike" className={styles.Computer}/>
               <img src={MobileBike} alt="Bike" className={styles.Mobile}/>
            </div>
        
            <div  className={styles.bet_amount}>
               <h3> BET AMOUNTS </h3>
               <p> &#x20B9; 100.00</p>
               <button> BET </button>
            </div>
        
            </div>
        
            <div  className={styles.bet_coin}>
                <div>
                <button> 10 </button>
                <button> 20 </button>
                <button> 50 </button>
                <button> 100 </button>
                </div>
                
                <div>
                    
                </div>
                <button> 200 </button>
                <button> 500 </button>
                <button> 1000 </button>
                <button> 2000 </button>
            </div>
        
         </div>
        

    )
}

export default Bike_Bet ;