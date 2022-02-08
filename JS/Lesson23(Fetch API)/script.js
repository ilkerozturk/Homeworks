// FETCH API ILE VERI CEKME //

//Fetch ile user bilgilerini çekme ve konsola yazdırma

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => response.json())
.then((json) => console.log(json))

//Fetch ile yorumlarda bulunan eposta parametre bilgilerini çekme ve konsola yazdırma

let listDOM = document.querySelector('#write')

fetch('https://jsonplaceholder.typicode.com/comments')
.then((response) => response.json())
.then((json) => json.forEach((item) => {
let liDOM = document.createElement('li');
liDOM.innerHTML = item.email
listDOM.append(liDOM);

}))




function fak(n){
    let value = 1
    for (let i = n; i>=1; i--){
        value *= i
    }
    return value;
}

console.log(fak(5));


