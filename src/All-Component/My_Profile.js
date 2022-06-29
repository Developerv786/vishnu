import styles from './Css/My_Profile.module.css';

function My_Profile () {
    return (
        <div className={styles.My_Profile}> 
            <form>
                <h1> Aman Pandey </h1>
                <h3> Profile Photo </h3> <br/>
                <input type="file" /> <br/>
                <input type="submit" value="Submit"/> <br/>
                <label> Full Name </label>  <br/>
                <p> Aman Pandey </p>
                <label> Email </label>  <br/>
                <p> Aman123@gmail.com </p>
                <label> Mobile Number </label> <br/>
                <p> 1234567890 </p>
                 
                
                
            </form>

        </div>
    )
}

export default My_Profile;