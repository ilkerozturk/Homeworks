// forEach() Methodu her bir dizi elemanını çağırarak callback function işlemi yaptırmak için kullanılabilir.//

let alphabet = ['i', 'l', 'e', 'r', 'k'];
let newArray = [];

alphabet.forEach(myFunction0);

function myFunction0(value) {
   newArray.push(value);
}

newArray.splice(2,0,'k');
newArray.pop();
document.querySelector('#txt').innerHTML += newArray;
console.log(newArray);




// map() Methodu her bir dizi elemanını çağırarak callback function işlemi yaparak yeni bir array oluşturur.//
let numbers = [1, 5, 6, 7, 9, 10, 34, 21, 56];

let newNumbers = numbers.map(myFunction);

function myFunction(value) {
   return value ** 2;

}

console.log(newNumbers);