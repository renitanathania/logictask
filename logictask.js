// Nomor 1
let penampung = ""
function hurufGenap(nama) {
    for (let i = 0 ; i < nama.length ; i++) {
        if((i + 1) % 2 === 0) {
           penampung += nama[i]
        }
    }
     return penampung
}
console.log(hurufGenap("nathania"))

// Nomor 2

// jika ketemu spasi atau karakter " " maka .......
// jika tidak maka .......
function countWord(kalimat) {
    let count = 1
    for( let i = 0 ; i < kalimat.length ; i++ ) {
        // "makan" -> 1 kata
        // "hari ini hari kamis" -> 4 kata
        if(kalimat[i] == " ") {
            count  = count + 1 
        } 
    }
     return count
}
console.log(countWord("hari ini hari kamis"))

// Nomor 3
function countvocal(word) {
    
}
// Nomor 4
function name(me) {
    let temp = ""
    for (let i = me.length - 1 ; i >= 0 ; i--) {
        temp += me[i]
    }
    return temp
}

console.log(name("renita"))

// Nomor 5
// jika argumen yang dimasukkan dari urutan depan dan urutan belakang ternyata sama maka kembalikan true
// jika tidak sama kembalikan false
function words(kataterbalik) {
    let reverse = ""
    for(let i = kataterbalik.lengh ; i > 0 ; i--) {
        reverse += kataterbalik [i]
    } 
    return (kataterbalik === kataterbalik)
}
console.log(words("katak"))

// Nomor 6
function pecahCoin (uang) {

    let pecahanUang=[1000, 500, 200, 100, 50, 20, 10,5,1];
    let hasil = "";
    function cekUang(pecahan) {
        while(uang >= pecahan) {
            hasil += pecahan+",";
            uang -= pecahan;
        }
    }
    for(i = 0 ; i < pecahanUang.length ; i++) {
        cekUang(pecahanUang[i]);
    }
    return hasil;
}

console.log(pecahCoin(5500))

// Nomor 7

