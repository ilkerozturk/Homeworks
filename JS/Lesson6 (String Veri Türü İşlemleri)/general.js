/* String Veri Türü İşlemleri */

let Name = "İlker"
let lastName = "Öztürk"
let email = "ilker.ozturk@btinteraktif.com"

/* Sring yapının uzunluğunu bulma */

console.log(email.length);

/* İlk karakteri bulma */

console.log(lastName[0])

/* Büyük Küçük harf yapma */

console.log(
    `
    İsim Büyük Harf: ${Name.toUpperCase()}
    İsim Küçük Harf: ${Name.toLowerCase()}
    `
)
/* String ifadenin belirli bir bölümünü alma (slice) */

console.log("Her Türk",Name.slice(3),"Doğar!")

/* String ifadede kelime, harf, sembol arama (search) */

console.log(email.search("@"))
console.log(email.slice(email.search("@")))
console.log("Website: ","www.",email.slice(email.search("@")+1))

/* String ifadede bir alanı değiştirmek (replace) */

let change = email.slice(email.search("@"))
change = change.replace("@btinteraktif.com", "kodluyoruz.org")
console.log(change)