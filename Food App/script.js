// dokumen, ambil element dengan id orderButton, jika di click maka jalankan fungsi berikut
document.getElementById('orderButton').onclick = function() {
    // berisi mengambil element dengan #food lalu mengambil value nya berarti nilai yg disimpan di dalam attribute value lalu
    const foodPrice = parseInt(document.getElementById('food').value);
    // ambil value dari attribute value lalu konversi string menggunakan parseInt
    const drinkPrice = parseInt(document.getElementById('drink').value);


    let totalPrice = foodPrice + drinkPrice;

    let discount = 0;

    // jika total harga lebih besar dari 80 maka
    if (totalPrice > 100) {
        // berisi misalnya totalPrice adalah 100 lalu 0.1 berarti mengambil 10% dari total price
        discount = totalPrice * 0.1;  
        // misalnya   
        totalPrice -= discount;
        alert(totalPrice);
    }

    // display resutl

}