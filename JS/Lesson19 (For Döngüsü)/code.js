//TITLE//
let title = document.querySelector('#title').innerHTML = 'For Döngüsü'

//INFO

/* let bilgi = document.querySelector('#print1');
bilgi.innerHTML = `${title}`; */

//CODE


let list = ['ilker','zeynep','ezgi','ediz','eren','emir','muhsin']

console.log(list.length)

for(i=0; i<list.length;i++){
   document.querySelector('#print').innerHTML += `${list[i]} <br>`
}

for(let i=0;i<list.length;i++){
   let ulDOM = document.querySelector('#userlist')
   let liDOM = document.createElement('li')
   liDOM.innerHTML += `${list[i]}`
   ulDOM.appendChild(liDOM)
   ulDOM.classList.add('text-start')
   

   
}