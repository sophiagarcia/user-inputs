$(function(){

});

var result = document.getElementById('result');
var button = document.getElementById('button');

button.addEventListener('click',compare);

function compare(){
    var money = document.getElementById('money').value;
    var happyfrank = document.getElementById('happyfrank');
    var sadfrank = document.getElementById('sadfrank');
    if(money > 35){
        //RESULTS=ADD FUN STUFF LIKE PIX//
        happyfrank.style.display += 'block';
        //happy frank//
        // a += b = a + b
    }
    else{
        sadfrank.style.display += 'block';
    }
    console.log(money);

}