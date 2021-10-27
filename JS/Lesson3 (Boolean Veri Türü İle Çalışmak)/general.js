// Boolean 'da 0 ve 1 ' i anlamak

let isnotActive = false;

console.log("Dönen değer :", Number(isnotActive)) // 0 değerini geri döndürür.

let isActive = true;

console.log("Dönen değer :", Number(isActive)) // 1 değerini geri döndürür.

// Değişkende veri tanımlı ise Bloolean "1" veri tanımlı değil ise "0" değerini döndürür, ancak istisnaları vardır!

//Boolean değerleri

let deger = "5689"
console.log("Dönen Değer :", Boolean(deger)) //true

let deger1 = " " //boşluk da bir değerdir!
console.log("Dönen Değer :", Boolean(deger1)) //true

let deger2 = ""
console.log("Dönen Değer :", Boolean(deger2)) //false