// Template Literals backtick (``) <pre> yazım formatında değişkenler tanımlama.

let ad = "İlker"
let soyad = "Öztürk"
let dtarihi = 1984
let yas = 2021- dtarihi
let il = "İstanbul"

let mesaj = `

Hoşgeldin ${ad} ${soyad}
Konumunuz: ${il}
Yaşınız: ${yas}

`

console.log(mesaj)