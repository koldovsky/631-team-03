
let date = new Date('Nov 29 2021 00:00:00');
function counts() {
  let now = new Date();
  gap = date - now;
  let days = Math.floor(gap / 1000 / 60 / 60 / 24);
  let hourse = Math.floor(gap / 1000 / 60 / 60 ) % 24;
  let minutes = Math.floor(gap / 1000 / 60 ) % 60;
  let seconds = Math.floor(gap / 1000 ) % 60;
if (gap < 0){
  document.getElementById('Mygroup').innerText  = 'Акция завершена';
} else {
document.getElementById('d').innerText  = days ;
document.getElementById('h').innerText  = hourse ;
document.getElementById('m').innerText  = minutes ;
document.getElementById('s').innerText  = seconds ;
}}
counts();
setInterval(counts,1000);