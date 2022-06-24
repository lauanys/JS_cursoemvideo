function result(){
   
let numero = document.querySelector('#inicio');
let tab = document.querySelector('#tabuada');
 
if(numero.value.length == 0){
window.alert('por favor digite um numero');
} else {
    let num = Number(numero.value);
    tab.innerHTML = '';
    for(let c = 1;c <= 10;c++ ){
 let item = document.createElement('option');
 item.text = (num +'x' + c + '=' + num * c);
tab.appendChild(item);
}
}
}