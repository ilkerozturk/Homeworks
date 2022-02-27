let arguments = process.argv.slice(2);
function daireninAlani (r2){

    let sonuc =  3.14*(r2*r2);
    console.log(`Yariçapi ${r2} birim olan dairenin alani: ${sonuc} birim'dir.`);
}

daireninAlani(arguments[0]*1);
