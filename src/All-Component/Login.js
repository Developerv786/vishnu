import { Link } from 'react-router-dom';
import styles from './Css/Sign_Up.module.css';

function Login () {
    return (
   
        <div className={styles.Sign_Up}> 
        <form>
            <h3> Login </h3> 
            
            <label for="Email"> Email <span className={styles.Star}> *  </span> </label> <br/>          
              <input class="input-field" type="email" placeholder="Email" title="Enter Your Email" name="Email"  required/> <br/>
            
            
            <label for="Password"> Password <span className={styles.Star}> *  </span> </label> <br/>
            <input class="input-field" type="Password" placeholder="Password" title="Upper case, Lower case, Special character and Numeric letter minimum 6 Character are required in Password Filed" pattern="^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\S+$).{6,}$" name="Password" required/> <br/>
           {/* <span>  <input type="checkbox" /> Show Password <br/> </span> */}

           <p className={styles.btn}>
           <button type="button" className={styles.btnlogin}> <Link to="/Share"> Forgot Password </Link> </button>
           <button type="submit" name="Register"> Login </button> 
           </p>
                    
           <center>  <p className={styles.Link}> Don't have an account? <Link to="/Sign_Up"> Create Account </Link> </p> </center>

           <p className={styles.help}> 
            Need Help? Live Chat Support 24/7
           </p>
          </form>

        </div>
   
        
        
    )
}

export default Login  ;