// api key dari openweathermap
const apiKey = "65cf4263455fecd786d2450bdb36dbd5";
// ambil data cuaca dari api berikut
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?id=1650357&appid=65cf4263455fecd786d2450bdb36dbd5&units=metric&q=";

// seleksi element input dan button pencarian
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

// Bayangkan kamu sedang menunggu giliran bermain di taman bermain, dan kamu ingin tetap bisa melakukan hal lain sambil menunggu. async function adalah cara bagi komputer untuk melakukan sesuatu sambil menunggu hasil dari tugas lain.
async function checkWeather(city) {
    // Ini seperti menunggu pak pos datang dengan membawa surat dari temanmu. fetch(apiUrl) adalah proses mengirim permintaan untuk mendapatkan surat (data) dari suatu alamat (apiUrl), dan await berarti kamu akan menunggu sampai surat itu tiba sebelum melanjutkan kegiatan lainnya.
    // ${apiKey} berarti mengambil nilai dari variable apiKey
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    // jika user mencari nama kota lalu nama kota nya tidak ditemukan maka
    if (response.status == 404) {
        // tampilkan
        document.querySelector(".error").style.display = "block";
        // sembunyikan tampilan
        document.querySelector(".weather").style.display = "none";
    } else {
        // tunggu sampai response json nya diterima, setelah diterima maka baru kerjakan kegiatan lagin
        let data = await response.json();
        // console.log(data);
        // seleksi .city lalu isinya berisi data.name
        document.querySelector(".city").innerHTML = data.name;
        // Math.round berfungsi membulatkan angka terdekat contohnya 4.5 akan menjadi 4 
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
        }
        // tampilkan tampilan dari .weather
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
};

// ketika tombol pencarian di klik maka jalankan fungsi berikut
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});