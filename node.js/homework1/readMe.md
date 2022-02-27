## READ ME!
----


- Hepimizin Matematik derslerinden bildiği üzere Dairenin Alanı = π x r2 şeklinde hesaplanır. 
- Node.JS Javascript çalışma ortamında yarıçap değerini konsoldan parametre olarak girerek alanı bulmaya çalışacağız. 
- Konsol çıktısı: Yarıçapı (Yarıçap) olan dairenin alanı: (Alan) şeklinde olmalıdır.


### JS KOD

<code>
let arguments = process.argv.slice(2);
function daireninAlani (r2){

    let sonuc =  3.14*(r2*r2);
    console.log(`Yariçapi ${r2} birim olan dairenin alani: ${sonuc} birim'dir.`);
}

daireninAlani(arguments[0]*1);
</code>

### CONSOLE LOG

<code>
node node.js/homework1/code.js 5
Yariçapi 5 birim olan dairenin alani: 78.5 birim'dir.
</code>