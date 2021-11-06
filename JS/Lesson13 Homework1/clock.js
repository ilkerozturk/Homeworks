//Title
document.getElementById('title').innerHTML = 'Kodluyoruz Javascript Saat Ödevi';
//Karşılama
let isim = prompt("Lütfen adınızı giriniz!");
let mesaj = `Merhaba ${isim}! Hoş geldin!`;
let karsilama = document.getElementById('karsilama').innerHTML = `${mesaj}`;

let date = new Date();

//Günleri Hesaplama
function gun(){
    let g = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
    let day = date.getDay();

    let selectday = g[day]; 
    document.getElementById('gun').innerHTML = `${selectday}`;  
}

//Saati Hesaplama

function saat(){
    let selecthours = new Date().toLocaleTimeString('tr-TR');
    document.getElementById('saat').innerHTML = `${selecthours}`;  
}


setInterval(saat, 10);
setInterval(gun, 10);


