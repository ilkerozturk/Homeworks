/* PS5 tutarı hesaplama */

let girisfiyatı = 4300
let kdv = girisfiyatı * 0.18
let otv = girisfiyatı * 0.50
let toplam = girisfiyatı + kdv + otv
console.log("PS5 Giriş Fiyatı :", girisfiyatı,"TL")
console.log("Hesaplanan KDV :", kdv,"TL")
console.log("Hesaplanan ÖTV :", otv,"TL")
console.log("Satış Fiyatı :",girisfiyatı+kdv+otv,"TL")

/* 4 işlem, işlem önceliği */

let hesapla = 10+50+2*5 /* Burada amaçlanan 310'a erişmek, bakalım doğrumu*/

let hesapla2 = (10+50+2)*5 /* Burada amaçlanan 310'a erişmek, işlem öncelik sırasını değiştirmek için parantez kullanabilirsiniz. */

console.log(hesapla)
console.log(hesapla2)

/* Mod kalan alma */

/*Farzedelim ki 380 adet yumurtamız var bu yumurtaları 6'lı kutulara koymak istiyoruz, bakalım  tam olarak sığacaklar mı yoksa arda kalan olacak mı? */

let kalan = 380%6
console.log(kalan) /*2 tane arttı */

/* Kare alma işlemi */

let karesi = 2*2*2*2*2*2*2 /* Bunun yerine aşağıdaki yöntemi kullanalım */

let karesi2 = 2 ** 6

console.log("2'nin 6. kuvveti :", karesi2)

/* Yukarı Yuvarlama İşlemi (ceil) */

let yukariyuvarla = 1.5

console.log("Yukarı Yuvarlama :", Math.ceil(yukariyuvarla))

/* Aşağı Yuvarlama (floor) */

let asagiyuvarla = 1.4

console.log("Aşağı Yuvarlama :", Math.floor(asagiyuvarla))

/* Yakına Yuvarlama (round) */

let yakinayuvarla = 1.6

console.log("Yakına Yuvarlama :", Math.round(yakinayuvarla))

/* Sayıları +1 artırma */

let number = 110
number ++;
console.log(number)

/* Toplama İşlemi */

let firstinteger = 4
let secondinteger = 12
let number3 = firstinteger + secondinteger
console.log(number3)
