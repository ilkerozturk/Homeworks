//TITLE//
document.querySelector('#title').innerHTML = "FAT Arrow"

//FAT Arrow Examples//

//EX1 ADDITION
let hesapla = (x,y) => x+y;

document.querySelector('#print').innerHTML = hesapla(3,46);

//EX2 EXPONENTIATION
let kare = (x) => x*x;

document.querySelector('#print2').innerHTML = kare(2);

//EX3 CONCAT

let birlestir = (param1, param2) => {
    return param1.concat(param2)
}

let br = birlestir([1,3,5,6,8],[10,23,78]);
document.querySelector('#print3').innerHTML = br;

//EX4 IF LOOP

let feedtheCat = (cat) => {

    if (cat==='hungry'){
        document.querySelector('#print4').innerHTML = 'Feed the CAT!'
    }
    else {
        document.querySelector('#print4').innerHTML = "Don't feed the CAT!"
    }

}

let cat = ''
feedtheCat(cat);

//EX5 QUESTION

//[1,2,3,4,5] array'ini parametre alan bir arrow fonksiyonumuz olsun. Bu array'in sonucu bize yeni bir array döndürsün. Oluşan yeni array'deki çift sayılar 2, tek sayılar ise 3 ile çarpılmış olsun. [1,2,3,4,5] => [1x3, 2x2, 3x3, 4x2, 5x3] => Sonuç çıktımız **[3,4,9,8,15]** olacakk

let liste = (param1) => {

 const newArr = param1.map(e=> {
    if(e%2==0){
        return e*2
    }
    else if (e%2==1){
        return e*3
    }
});
return newArr 
}

document.querySelector('#print5').innerHTML = liste([1,2,3,4,5]);