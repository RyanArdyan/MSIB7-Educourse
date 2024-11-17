// // definisikan variable
// let seconds = 00;
// let tens = 00;
// let mins = 00;
// // ambil semua class seconds
// let getTens = document.querySelector('.tens');
// let getSeconds = document.querySelector('.seconds');
// let getMins = document.querySelector('.mins');
// let btnStart = document.querySelector('.btn-start');
// let btnStop = document.querySelector('.btn-stop');
// let btnReset = document.querySelector('.btn-reset');
// let interval;

// // definisikan fungsi mulai pengatur waktu
// function startTimer() {
//     // tambah angka pada value tens nya
//     tens++;
//     // jika tens nya lebih kecil atau sama dengan 9 maka
//     if (tens <= 9) {
//         // angka nya akan bertambah sampai dengan 09
//         getTens.innerHTML = '0' + tens
//     }
//     // lain jika angka puluhannya lebih dari 9 maka
//     if (tens > 9) {
//         // console.log('oke');
//         // panggil value .tens lalu isi dengan value variable tens
//         getTens.innerHTML = tens; 
//     }
//     // lain jika value variable puluhan lebih besar dari 99 maka
//     if (tens > 99) {
//         // detiknya bertambah
//         seconds++;
//         // panggil value .seconds  lalu string 0 digabung dengan detik
//         getSeconds.innerHTML = '0' + seconds;
//         // tens diisi dengan 0 karena detik nya sudah 1
//         tens = 0;
//         // jadi 00
//         getTens.innerHTML = '0' + 0;
//     } 
//     // lain jika angka detiknya lebih dari 9 maka
//     if (seconds > 9) {
//         // panggil value .seconds lalu isi dengan value variable seconds
//         getSeconds.innerHTML = seconds; 
//     }
//     // jika sudah melewati dari 59 detik maka tambah 1 pada menit nya
//     if (seconds > 59) {
//         // tambah value pada menit nya
//         mins++;
//         // 
//         getMins.innerHTML = '0' + mins;
//         seconds = 0;
//         getSeconds.innerHTML = '0' + 0;
//     }
//     // jika menit lebih besar dari 9 maka 
//     if (mins > 9) {
//         getMins.innerHTML = mins;
//     }
// }

// // ketika tombol start nya di click maka jalankan fungsi berikut 
// btnStart.addEventListener('click', () => {
//     // tolong panggil dan jalankan fungsi startTimer setiap 10 mildetik
//     interval = setInterval(startTimer, 10);
// });

// // panggil .btn-stop lalu ketika di click maka jalankan fungsi berikut
// btnStop.addEventListener('click', () => {
//     // adalah perintah yang memberitahu komputer untuk menghentikan fungsi yang berjalan berulang kali di dalam variable interval
//     clearInterval(interval);
// });

// btnReset.addEventListener('click', () => {
//     clearInterval(interval);
//     tens = '00';
//     seconds = '00';
//     mins = '00';
//     getTens.innerHTML = tens;
//     getSeconds.innerHTML = seconds;
//     getMins.innerHTML = mins;
// });