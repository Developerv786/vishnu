import { Link } from 'react-router-dom';
import styles from './Css/Sign_Up.module.css';

function Sigh_Up() {
    return (
   
        <div className={styles.Sign_Up}> 
        <form>
            <h3> Create an Account </h3> 
            <label for="Name"> Full Name <span className={styles.Star}> *  </span> </label> <br/>       
            <input class="input-field" type="text" placeholder="Full Name" title="Enter Your Full Name" name="Full_Name"  required/> <br/>
            
            <label for="Email"> Email <span className={styles.Star}> *  </span> </label> <br/>          
              <input class="input-field" type="email" placeholder="Email" title="Enter Your Email" name="Email" required/> <br/>

              <label for="Number">Mobile Number <span className={styles.Star}> *  </span> </label> <br/>
             <input class="input-field" type="tel" placeholder="1234567890" title="Enter Your 10 Digit Phone Number" name="Phone_Number" pattern="[0-9]{10}" required/> <br/>
            
            
            <label for="Password"> Password <span className={styles.Star}> *  </span> </label> <br/>
            <input class="input-field" type="Password" placeholder="Password" title="Upper case, Lower case, Special character and Numeric letter minimum 6 Character are required in Password Filed" pattern="^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\S+$).{6,}$" name="Password" required/> <br/>
           {/* <span>  <input type="checkbox" /> Show Password <br/> </span> */}


           <label for="Password"> Confirm Password <span className={styles.Star}> *  </span> </label> <br/>
            <input class="input-field" type="Password" placeholder="Confirm Password" title="Upper case, Lower case, Special character and Numeric letter minimum 6 Character are required in Password filed" pattern="^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\S+$).{6,}$" name="Confirm_Password" required/> <br/>

           {/* <span>   <input type="checkbox"/> Show Conform Password </span> */}

           <p> <span> <input type="checkbox" required/> </span>  I read and agree <Link to="/Share">Terms and Conditions </Link> / <Link to="/Share"> Policy. </Link>  </p>

           <p className={styles.btn}>
           <button type="reset" name='Reset'> Reset </button>
           <button type="submit" name="Register"> Create Account </button> 
           </p>
                    
           <center>  <p className={styles.Link}> Already have an account? <Link to="/Login"> Login </Link> </p> </center>
          </form>

        </div>
   
        
        
    )
}

export default Sigh_Up ;