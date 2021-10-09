
let CurrentDate = new Date('Nov 29 2021 00:00:00');
function counts() {
  let nowDate = new Date();
  gap = CurrentDate - nowDate;
  let days = Math.floor(gap / 1000 / 60 / 60 / 24);
  let hours = Math.floor(gap / 1000 / 60 / 60 ) % 24;
  let minutes = Math.floor(gap / 1000 / 60 ) % 60;
  let seconds = Math.floor(gap / 1000 ) % 60;
if (gap < 0){
  document.getElementById('Mygroup').innerText  = 'Акция завершена';
} else {
document.getElementById('d').innerText  = days ;
document.getElementById('h').innerText  = hours ;
document.getElementById('m').innerText  = minutes ;
document.getElementById('s').innerText  = seconds ;
}}
counts();
setInterval(counts,1000);