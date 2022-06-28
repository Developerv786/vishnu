import React , {useState} from "react";
import { Link } from "react-router-dom";
import styles from './Css/Navbar.module.css';


function Navbar () {

    const [show, setShow] = useState(false);

    return (
        <div className={styles.navbar}> 
            <nav class="navbar navbar-expand-lg">
                <div class="container">
                    <span> RC11Games </span>
                    <button  class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"
                    onClick={() => setShow(!show)}>
                    <i class="fas fa-bars" style={{color:"white"}}> </i>

                    {/* this is button code  */}
                    {/* <span class="navbar-toggler-icon">  </span> */}
                    </button>

                    <div class={`collapse navbar-collapse ${show ? "show" : ""}`} >
                <div class="navbar-nav ms-auto">
                <Link to="/chat_on_telegram" className={styles.anchorbackground}> <i class="fas fa-share"></i> Share </Link>
                <Link to="./Dashboard"> <i class='fas fa-file-contract'></i> Policy </Link>
                <Link to="/Help"> <i class="fas fa-bell"></i> Notification </Link>
                <Link  to="/chat_on_telegram"> <i class="fab fa-telegram-plane" ></i> Chat on Telegram </Link>
               
                
               <section className={styles.Mobile_Nav}>
               <Link to="/chat_on_telegram"> <i class="fa fa-download" aria-hidden="true"></i> App Download </Link>
                <Link to="/chat_on_telegram"> <i class="fas fa-history"></i> Show History </Link>
                <Link to="/Share"> <i class="fas fa-exchange-alt"></i> Transactions </Link>
                <Link to="/chat_on_telegram"> <i class="fas fa-user-circle"></i> My Profile </Link>
                <Link to="/bet"> <i class="fas fa-sign-out-alt"></i> Log out </Link>
            
                </section>  


                </div>
                    </div>
                </div>
            </nav>
            
        </div>
        
    )
}

export default Navbar ;