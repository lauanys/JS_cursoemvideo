function carregar(){
let body = document.querySelector('body');
let msg = document.querySelector('#msg');
let date = new Date();
let hrs = date.getHours();
msg.innerHTML='Agora são '+hrs+ ' horas';
if(hrs >= 0 && hrs < 12){
    body.style.backgroundImage = "url(imgs/nascer_do_sol.jpg)"
   

} else if(hrs >= 12 && hrs < 18){
    body.style.backgroundImage = "url(imgs/por_do_sol.jpg)"
 
} else {
    body.style.backgroundImage = "url(imgs/noite.jpg)"
  
}

}