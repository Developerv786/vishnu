import { Link } from "react-router-dom";
import styles from "./Css/Second_Footer.module.css";


function Second_Footer () {
    return (

        <section className={styles.Second_Footer}> 
            <div class="container">
                <div class="row"> 
                  <div class="col-md-4 col-lg-4 col-xl-4" >
                    <ul> 
                        <li> Policy </li>
                        <li> <Link to="/share"> Terms & Conditions </Link>  </li>
                        <li> <Link to="/share"> Withdrawals Policy </Link>  </li>
                        <li> <Link to="/share"> Payment Policy </Link>  </li>
                        <li> <Link to="/share"> Privacy Policy </Link>  </li>
                        <li> <Link to="/share"> Deposit Policy </Link>  </li>
                    </ul>

                  </div>
                  <div class="col-md-4 col-lg-4 col-xl-4" >
                    <ul>
                        <li> About </li>
                        <li> <Link to="/share"> Disclaimer </Link>  </li>
                        <li> <Link to="/share"> Contact us </Link>  </li>
                        <li> <Link to="/share"> About us </Link>  </li>
                        <li> <Link to="/share"> FAQs </Link>  </li>
                        <li> <Link to="/share"> Help </Link>  </li>
                    </ul>


                  </div>
                  <div class="col-md-4 col-lg-4 col-xl-4" >
                    <ul>
                        <li> Social </li>
                        <li> <Link to="/share"> Facebook </Link>  </li>
                        <li> <Link to="/share"> Instagram </Link>  </li>
                        <li> <Link to="/share"> Telegram </Link>  </li>
                        <li> <Link to="/share"> Twitter </Link>  </li>
                    </ul>

                  </div>
                
                </div>
                
            </div> 

            <div>

            </div>
            
        <section  className={styles.Copyrightline}> 
                <div class="container"> 
             <div class="row"> 
                <div class="col-md-7"> 
                    &copy; Copyright 2022 RC11Games.com All Rights Reserved. 
                </div>

            <div class="col-md-5">
                <Link to="/share"> <i class="fab fa-facebook-f" style={{color:"white",backgroundColor: "#3c5a99",}} ></i> </Link>

                <Link to="/share" > <i class="fab fa-telegram-plane" style={{color:"white",backgroundColor: "#00a0e3",}} ></i> </Link>

                <Link to="/share"> <i class="fab fa-instagram" style={{color:"white",backgroundColor: "#e44405",}} ></i> </Link>

                <Link to="/share"> <i class="fab fa-twitter"style={{color:"white",backgroundColor: "#1da1f2",}} ></i></Link>
            </div>

             </div>

                   

            </div>
        </section>
          
            
        </section>

    )
}

export default Second_Footer ;