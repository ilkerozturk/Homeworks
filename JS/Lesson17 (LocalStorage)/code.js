//TITLE//
document.querySelector('#title').innerHTML = "Local Storage ile Çalışmak"

//INFO

let bilgi = document.querySelector('#print1');
bilgi.innerHTML = 'Local Storage ile Çalışmak';

//CODE

let counter = localStorage.getItem('counter') ? localStorage.getItem('counter') : 0
let increaseDOM = document.querySelector('#increase');
let decreaseDOM = document.querySelector('#decrease');
let counterDOM = document.querySelector('#print2');
counterDOM.innerHTML = counter;


increaseDOM.addEventListener('click', clickEvent);
decreaseDOM.addEventListener('click', clickEvent);


function clickEvent(){

   console.log(this.id);
    
   this.id == "increase" ? counter +=1 : counter -=1;
   localStorage.setItem('counter', counter);

   counterDOM.innerHTML = counter;

}