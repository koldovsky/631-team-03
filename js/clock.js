const countDownDate = new Date("Nov 1 2021 00:00:00").getTime();
 
  let x = setInterval(function() {

  let now = new Date().getTime();
  
  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    document.getElementById("time-days").innerHTML = days 
    document.getElementById("time-hours").innerHTML = hours
    document.getElementById("time-minutes").innerHTML = minutes
    document.getElementById("time-seconds").innerHTML = seconds
      
   }, 1000);

