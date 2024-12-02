// jika dokumen siap maka jalankan fungsi berikut
$(document).ready(function() {
    let myChart;

    // jika #activityForm dikirim maka jalankan fungsi berikut
    $('#activityForm').on('submit', function(event) {
        event.preventDefault(); // Mencegah form dari reload browser

        // panggil #activity lalu ambil value nya, misalnya lari
        const activity = $('#activity').val();
        // panggil #distance lalu ambil value nya, misalnya 2
        const distance = parseFloat($('#distance').val());
        // panggil #time lalu ambil value nya, misalnya 30
        const time = parseFloat($('#time').val());
        // deklarasi variable kalori
        let calories;

        // Menghitung kalori berdasarkan aktivitas
        // jika aktivitas sama dengan lari maka
        if (activity === 'lari') {
            // jarak * 62 misalnya 2 * 62 = 124 kalori
            calories = distance * 62; // Kalori per km untuk lari
        } else if (activity === 'bersepeda') {
            // jarak * 50 misalnya 2 * 50
            calories = distance * 50; // Kalori per km untuk bersepeda
        }

        // Menampilkan hasil kalori
        // panggil #result lalu html nya diisi dengan h2 
        // .toFixed(2) berarti kita ingin menampilkan angka tersebut dengan dua angka di belakang koma.
        $('#result').html(`<h2>Kalori Terbakar: ${calories.toFixed(2)} kalori</h2>`);

        // Menyiapkan data untuk Chart.js
        // panggil #myChart, index ke 0 lalu ambil konteks nya dan gunakan 2 dimensi
        const ctx = $('#myChart')[0].getContext('2d');

        // jika ada my chart maka
        if (myChart) {
            // hapus chart nya karena chart kedua harus menghapus chart pertama
            myChart.destroy();
        }

        // inisialisasi chart, ctx berisi dapatkan konteks
        myChart = new Chart(ctx, {
            // tipe nya bar
            type: 'bar',
            // berisi data-data
            data: {
                // label-label nya
                labels: ['Kalori Lari', 'Kalori Bersepeda'],
                datasets: [{
                    label: 'Kalori Terbakar',
                    // jika data aktivitas nya lari maka kalori nya 0 dan begitu juga bersepeda
                    data: [activity === 'lari' ? calories : 0, activity === 'bersepeda' ? calories : 0],
                    // latar belakang
                    backgroundColor: [
                        // latar belakang untuk Kalori Lari
                        'rgba(75, 192, 192, 0.5)',
                        // latar belakang untuk Kalori bersepeda
                        'rgba(153, 102, 255, 0.5)'
                    ],
                    borderColor: [
                        // warna bingkai untuk kalori lari
                        'rgba(75, 192, 192, 1)',
                        // warna bingkai untuk kalori bersepeda
                        'rgba(153, 102, 255, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            //  Ini adalah objek yang berisi pengaturan untuk grafik. Di dalam objek ini, Anda dapat menentukan berbagai opsi untuk mengontrol tampilan dan perilaku grafik.
            options: {
                // Ini adalah objek yang digunakan untuk mengkonfigurasi sumbu (axes) grafik. Dalam konteks ini, kita berbicara tentang sumbu y (vertikal) dari grafik.
                scales: {
                    // Ini merujuk pada sumbu y dari grafik. Anda dapat mengkonfigurasi berbagai pengaturan untuk sumbu ini, seperti rentang nilai, label, dan lainnya.
                    y: {
                        //  Ini adalah opsi spesifik untuk sumbu y. Ketika diatur ke true, ini memastikan bahwa sumbu y akan dimulai dari angka 0. 
                        beginAtZero: true
                    }
                }
            }
        });
    });
});