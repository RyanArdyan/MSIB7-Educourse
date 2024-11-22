// kunci API
const apiKey = '65cf4263455fecd786d2450bdb36dbd5'; // Replace with your OpenWeatherMap API key
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
const hourlyApiUrl = 'https://api.openweathermap.org/data/2.5/forecast';

// jika dokumen siap maka jalankan fungsi berikut
$(document).ready(function() {
    // Function to update the clock
    function updateClock() {
        const now = new Date();
        const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
        $('#clock').text(now.toLocaleTimeString([], options));
    }

    // Update the clock every second
    setInterval(updateClock, 1000);
    
    $('#searchButton').click(function() {
        const location = $('#locationInput').val();
        if (location) {
            fetchWeather(location);
            fetchHourlyForecast(location);
        }
    });
});

function fetchWeather(location) {
    const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

    $.get(url, function(data) {
        $('#location').text(data.name);
        $('#temperature').text(`${Math.round(data.main.temp)}°C`);
        $('#description').text(data.weather[0].description);
    }).fail(function() {
        alert('City not found. Please try again.');
    });
}

function fetchHourlyForecast(location) {
    const url = `${hourlyApiUrl}?q=${location}&appid=${apiKey}&units=metric`;

    $.get(url, function(data) {
        $('#hourlyForecast').empty(); // Clear previous forecast
        const hourlyData = data.list.slice(0, 5); // Get the next 5 hours

        hourlyData.forEach(function(hour) {
            const time = new Date(hour.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            const temp = Math.round(hour.main.temp);
            const description = hour.weather[0].description;

            $('#hourlyForecast').append(`
                <div class="hour">
                    <p>${time}</p>
                    <p>${temp}°C</p>
                    <p>${description}</p>
                </div>
            `);
        });
    }).fail(function() {
        alert('Could not fetch hourly forecast. Please try again.');
    });
}