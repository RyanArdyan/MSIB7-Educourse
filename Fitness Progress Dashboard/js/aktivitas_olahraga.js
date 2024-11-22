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
        const ctx = $('#myChart')[0].getContext('2d');

        if (myChart) {
            myChart.destroy();
        }

        myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Kalori Lari', 'Kalori Bersepeda'],
                datasets: [{
                    label: 'Kalori Terbakar',
                    data: [activity === 'lari' ? calories : 0, activity === 'bersepeda' ? calories : 0],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.5)',
                        'rgba(153, 102, 255, 0.5)'
                    ],
                    borderColor: [
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    });
});