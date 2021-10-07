const clockContainer = document.querySelector('.clock');
    setInterval(updateClock, 1000);
    
    function updateClock() { 
    
    // Seconds
    const seconds = new Date().getSeconds();
    document.getElementById("seconds").innerHTML = (seconds < 10 ? '0' : '') + seconds;

    // Minutes
    const minutes = new Date().getMinutes();
    document.getElementById("minutes").innerHTML = (minutes < 10 ? '0' : '') + minutes;

    // Hours
    const hours = new Date().getHours();
    document.getElementById("hours").innerHTML = (hours < 10 ? '0' : '') + hours;
  
    
    //Days
    const days = new Date().getDays();
    document.getElementById("days").innerHTML = (days < 10 ? '0' : '') + days;
  clockContainer.innerText = newDate().toLocaleTimeString();
}