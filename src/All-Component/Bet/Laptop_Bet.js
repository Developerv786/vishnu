import styles from '../Css/Bet.module.css';
import ComputerLaptop from '../Bet-Images-Computer/ComputerLaptop.jpg';
import MobileLaptop from '../Bet-Images-Mobile/MobileLaptop.jpg';


function Laptop_Bet () {
    return (
    //    bet area code here start 

        <div className={styles.bet_background}>
        
        <div className={styles.bet_back}>
            <div  className={styles.bet_image}>
               <img src={ComputerLaptop} alt="Laptop" className={styles.Computer}/>
               <img src={MobileLaptop} alt="Laptop" className={styles.Mobile}/>
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

export default Laptop_Bet ;