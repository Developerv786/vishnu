import { Link } from 'react-router-dom';
import styles from './Css/Footer.module.css';


function Footer () {
    return (
        <section className={styles.FooterSecond}> 
        <div  class="container" > 
          <div class="row">
             <div class="col-md-6  col-xl-6">
                <h2> Contact us </h2>
                <p> 
                    24/7 Customer Support is available to answer your quentions. You can ask your quentions on Telegram or Email. Of course we will help you. Our Live Support service will always happy to help you.
                </p>

        <ul> 
            <li> <i class="fas fa-envelope" style={{backgroundColor:"#e44405",}}> </i> Devilhand2910@gmail.com  
            
            </li>
                
            <li> <Link to="/Share"> <i class="fab fa-telegram-plane" style={{backgroundColor:"#00a0e3",}}>  </i> Telegram </Link> </li> 
        </ul>

             </div> 
             
             <div class="col-md-6 col-xl-6">
             

                <div class="container" className={styles.FormArea}>
                <h3 className={styles.Formheading}> Say Something </h3>
                    <form action="">
                        <label for="Name">Full Name</label>
                        <input type="text" id="fname" name="Full Name " placeholder="Your Full Name.."/> <br/>

                        <label for="Email">Email </label>
                        <input type="text" id="lname" name="Email" placeholder="Your Email.."/> <br/>

                        <label for="messages"> Messages</label>
                        <textarea id="subject" name="Message" placeholder="Write something.."></textarea> <br/>

                        <input type="submit" value="Submit"/>
                    </form>
                </div>

             </div>
            
          </div>        



        </div>
      </section>
    )
}

export default Footer ;