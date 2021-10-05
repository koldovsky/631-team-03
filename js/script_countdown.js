const finalDate = new Date('Nov 1 2021 00:00:00');
  

   const daysVal = document.querySelector('.time_days .countdown_days');
   const hoursVal = document.querySelector('.time_hours .countdown_hours');
   const minutesVal = document.querySelector('.time_minutes .countdown_minutes');
   const secondsVal = document.querySelector('.time_seconds .countdown_seconds');


   const timeCount = () => {

     let now = new Date ();
     let leftUntil = finalDate - now;
     
     let days = Math.floor(leftUntil/1000/60/60/24);
     let hours = Math.floor(leftUntil/1000/60/60) % 24;
     let minutes = Math.floor(leftUntil/1000/60)%60;
     let seconds = Math.floor(leftUntil/1000)%60;
     

      daysVal.textContent = days;
      hoursVal.textContent = hours;
      minutesVal.textContent = minutes;
      secondsVal.textContent = seconds;
   }
   timeCount ();
   setInterval(timeCount, 1000);