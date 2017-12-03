$(function(){

    // try to do something cool with hover

});

var result = document.getElementById('result');
var button = document.getElementById('button');

button.addEventListener('click',compare);

function compare(){
    var money = document.getElementById('money').value;
    var happyfrank = document.getElementById('happyfrank');
    var sadfrank = document.getElementById('sadfrank');
    var yeah = document.getElementById('yeah');
    var nahh= document.getElementById('nahh');
    if(money > 35){
        //RESULTS=ADD FUN STUFF LIKE PIX//
        yeah.style.display = 'block';
        happyfrank.style.display = 'block';
        sadfrank.style.display = 'none';
        //happy frank//
    }
    else{
        nah.style.display = 'block';
        sadfrank.style.display = 'block';
        happyfrank.style.display = 'none';
    }
    console.log(money);

}
