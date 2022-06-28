import styles  from './Css/Right_Navbar.module.css';
import moment from 'moment';
import { useState } from 'react';

function Right_Navbar () {

    let Time = new Date().toLocaleTimeString();
    const [cureentTime, setCtime] = useState(Time);

    const UpdateTime = () => {
        Time = new Date().toLocaleTimeString();
        setCtime(Time);
    } ;
    setInterval(UpdateTime, 1000);

    return (
        <section className={styles.Right_Navbar}> 
            <div class="container-fluid">
                <div class="row">
                    <div class="col-4" className={styles.B}> 
                    {/* <img src="All-Images/Navbar-Images/Balance.jpg"/>  */}
                     <p> 
                        Available <br/>
                         Balance <br/>
                         <span> &#x20B9; 1000.00 </span>
                        
                     </p>
                    
                    </div> 
                    <div class="col-4" className={styles.U}>
                    {/* <img src="All-Images/Navbar-Images/User-Name.jpg"/> */}
                                 
                     <p> 
                        Hello... <br/>
                        I am <br/>
                        Ajay Sharma 
                     </p>
                        
                     </div>
                     <div class="col-4" className={styles.T}> 
                     {/* <img src="All-Images/Navbar-Images/Time.jpg"/>   */}
                     
                      <p> 
                             <h4>  WATCH </h4>
                             {Time} <br/> 
                             {/* {moment().format('dddd') } <br/>  */}
                            {moment().format('D MMMM YYYY') } <br/> 
                                    
                    
                        
                      </p>
                        
                     </div>
                
                </div> 
            
        </div>

        </section>
        
    )
}

export default Right_Navbar;