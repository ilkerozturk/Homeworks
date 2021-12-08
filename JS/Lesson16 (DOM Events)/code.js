//TITLE//
document.querySelector('#title').innerHTML = "DOM Events"

//DOM Events Examples//

//EX1

let bilgi = document.querySelector('#print1');
bilgi.innerHTML = 'DOM Event ile Bilgi Değiştirme';
bilgi.addEventListener('click',changeColor)
bilgi.style.color = 'black';

function changeColor(){
    bilgi.style.color == 'black' ? bilgi.style.color = 'red' : bilgi.style.color = 'black';
}