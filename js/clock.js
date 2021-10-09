const countDownDate = new Date("Nov 1 2021 00:00:00").getTime();
 
  const x = setInterval(function() {

  const now = new Date().getTime();
  
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("time-days").innerHTML = days 
    document.getElementById("time-hours").innerHTML = hours
    document.getElementById("time-minutes").innerHTML = minutes
    document.getElementById("time-seconds").innerHTML = seconds
      
   }, 1000);

