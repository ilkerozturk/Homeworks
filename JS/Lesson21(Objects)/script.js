/*Object Literal ile obje oluşturma ve miras yoluyla (Object.create())obje özelliklerinin başka bir objeye aktarımı */

let carSpecs = {
  brand: "Ferrari",
  modelYear: "2008",
  model: "458 Italy",
  engine: "Atmospheric V8",
}

console.log(typeof(carSpecs));

let carSpecs2 = Object.create(carSpecs)
carSpecs2.model = "F430 Scuderia"
carSpecs2.modelYear = "2006"

console.log(typeof(carSpecs2));

/* Literal ve property tanımlamaları */

let carSpecs3 = {
  brand: "Porsche",
  model: "718 Spyder",
  modelYear: "2021",
  horsePower: "456ps",
  gear: "manuel",
  "is manuel": true, //birden fazla ayrık kelimeler için "" işaretleri kullanılabilir.
}
/* Property okuma */
console.log(carSpecs3.brand)
/* Ya da */
console.log(carSpecs3["brand"])
/* Property Ekleme ya da Değiştirme */
carSpecs3.engine = "Atmospheric V8" //Object.property yazım şekli dot notation olarak tarif edilir. Ayrık kelimeler için dot notation kullanılamaz ancak;
carSpecs3.modelYear = "2022"
carSpecs3["horse Power"]= "550ps" //Ayrık kelimeler için square bracket kullanılarak property tanımlanabilir.

/* Property Silme */
delete carSpecs3.horsePower;

/* 
* Objeler, birkaç özel niteliğe sahip ilişkilendirilebilir array(dizi)'lerdir.
* Key / value şeklinde property'leri saklar.
* Key ifadesi string veya sembol olmalıdır.
* Value ifadesi herhangi bir değer alabilir.
* Belli bir property'e erişmek için kullanabileceklerimiz: 
  * Dot notation: obj.property 
  * Square brackets notation obj[“property”]. Bu özellik key'in obj[varWithKey] gibi bir değişkenden alınmasına izin verir.

Bu zamana kadar bahsettiğimiz objeler “plain object” olarak isimlendirilir. 
*/

/* 
Object.keys(obj) – Key’lerden oluşan bir array döner(return).
Object.values(obj) – Value’lardan oluşan bir array döner.
Object.entries(obj) – [key, value] çiftlerinden oluşan bir array döner. 
*/

console.log(Object.keys(carSpecs3)); // (7) ['brand', 'model', 'modelYear', 'gear', 'is manuel', 'engine', 'horse Power'] döner!
console.log(Object.values(carSpecs3)); // (7) ['Porsche', '718 Spyder', '2022', 'manuel', true, 'Atmospheric V8', '550ps'] döner!
console.log(Object.entries(carSpecs3)); // (7) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)] döner ve her dizinin içi söyledir;
                                        // 0: (2) ['brand', 'Porsche'] gibi...


// JSON METHODLARI

let carSpecs4 =  {            // Elimizde carSpecs4 isimli bir Obje/JSON List var ve bunu bir DOM objeye yazmak istiyorsak öncelikle JSON.stringify ile dönüştürmemiz gerekir.
  brand: "Volkswagen",        // Objenizi String veri türüne çevirip, projenizde objelerinizi direk sayfaya basmak isterseniz, onun içinde bir metot bulunmakta.
  model: "Scirocco Sportline",
  modelYear:  "2015",
  type: "Coupe",
  engine: "Turbo SuperCharge",
  horsePower: "160ps",
  color: "White",
}

let deger = document.querySelector('#write').innerHTML = JSON.stringify(carSpecs4); // Tüm veriyi obje/list olarak verir JSON objesini stringe çevirir ve DOM objesine yazar.
console.log(deger);
JSON.stringify(carSpecs4["model"]); // Bu da spesifik bir property anahtarının değerini verir.

let parse = JSON.parse(deger); // Bu da stringify methodunun tersidir tekrar json'a çevirir.
console.log(parse);

