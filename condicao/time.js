
var agora = new Date(); 
var time = agora.getHours();
if(time >= 0 && time <= 12){
console.log('bom dia');
} else if(time >12 && time <= 18){
    console.log('boa tarde');

}else{
    console.log('boa noite');
};
