//TITLE//
let title = document.querySelector('#title').innerHTML = 'Form İşlemleri'

//INFO

/* let bilgi = document.querySelector('#print1');
bilgi.innerHTML = `${title}`; */

//CODE


let userFormDOM = document.querySelector('#userForm')
userFormDOM.addEventListener('submit', sendDATA);

let bodyDOM = document.querySelector('#body')
//ALERT FONKSIYONU

let alert = (message, info) => {

let alertDOM = document.createElement('span')
alertDOM.classList.add('fixed-top','mb-5')
alertDOM.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
<strong>${message}</strong> ${info}
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`
bodyDOM.append(alertDOM)

}
// VERILERI GONDEREN FONKSIYON
function sendDATA(event){
   
   event.preventDefault()

   let firstNameDOM = document.querySelector('#firstName')
   let scoreNumberDOM = document.querySelector('#scoreNumber')

   if (firstNameDOM.value && scoreNumberDOM.value){
      addItem(firstNameDOM.value, scoreNumberDOM.value)
      firstNameDOM.value = ''
      scoreNumberDOM.value = ''
   }
   else {
      let mesaj = 'HATA'
      let bilgi = 'Lütfen bilgileri kontrol ediniz.'
      alert(mesaj, bilgi)
   }
}

// FORM LISTESI OUŞTURAN FONKSIYON

let formListDOM = document.querySelector('#formList');

function addItem(userName, score){

let liDOM = document.createElement('li')
liDOM.classList.add('list-group-item', 'd-flex')
liDOM.innerHTML = `
<span class = 'me-auto'>${userName}</span>
<span class= "badge bg-primary rounded-pill">${score}</span>
`
formListDOM.append(liDOM)


}


{/* <li class="list-group-item d-flex justify-content-between align-items-start">
<div id='liname' class="ms-2 me-auto">
    <div class="fw-bold"></div>
</div>
<span class="badge bg-primary rounded-pill"></span>
</li> */}