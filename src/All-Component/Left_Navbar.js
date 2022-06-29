import styles from './Css/Left_Navbar.module.css';
import { Link } from "react-router-dom";

 
function Left_Navbar () {
return (
    
    <section className={styles.Left_Navbar}> 
    
        <div class="container">
            <div class="row">
             <div class="col-12">
             <ul> 
                <Link to="/Dashboard"> <i class="fas fa-tachometer-alt"></i> Dashboard </Link> 
                <Link to="/show"> <i class="far fa-eye"></i> Show </Link> 
                <Link to="/Share"> <i class="fa fa-bank"></i> Deposit </Link> 
                <Link to="/Share"> <i class="fa fa-money"></i> Withdrawals </Link>  
                <Link to="/chat_on_telegram"> <i class="fa fa-download" aria-hidden="true"></i> App Download </Link>
                <Link to="/Share"> <i class="fas fa-history"></i> Show History </Link> 
                <Link to="/Share"> <i class="fas fa-exchange-alt"></i> Transactions </Link> 
                <Link to="/My_Profile"> <i class="fas fa-user-circle"></i> My Profile </Link> 
                <Link to="/Sign_Up"> <i class="fas fa-sign-out-alt"></i> Log out </Link> 
            </ul>
             </div> 

                
            </div> 

        </div>
     </section>

)
    
}

export default Left_Navbar;