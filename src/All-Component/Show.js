import styles from './Css/Show.module.css';

function Show () {

    return (
        <div className={styles.result_area}>
    <h2> It is Show Time </h2>
    
    <div className={styles.result_images}>
      {/* Is is show backgound    */}

   <h2 className={styles.n}> Next Show Time </h2>
   <h3 className={styles.d}> Date <br/>
      Wednesday 01-June-22 </h3>
       <h3 className={styles.t}> Time <br/>
        Morning 08:00 AM </h3>

         {/* result images */}

        {/* <img src="Show-images/Car.jpg" alt="Car">

       <img src="Show-images/Bike.jpg" alt="bike">

       <img src="Show-images/Dragon.jpg" alt="Dragon">

       <img src="Show-images/Unicorn.jpg" alt="Unicorn">

       <img src="Show-images/House.jpg" alt="House">

       <img src="Show-images/Ship.jpg" alt="Ship">

       <img src="Show-images/Aeroplane.jpg" alt="Aeroplane">

       <img src="Show-images/Spider man.jpg" alt="Spider Man">

       <img src="Show-images/Laptop.jpg" alt="Laptop">

       <img src="Show-images/Taj mahal.jpg" alt="Tal Mahal">
       
       <img src="Show-images/Lion.jpg" alt="Lion"> */}
       
   </div>


   <p> If You have Invested Rupees on This Image.
        Then You will Get Bet × 10 Rupees. </p>
</div>

    )

}

export default Show ;