function getWeather() {
    const city = document.getElementById('city-input').value;
    const apiKey = 'api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=391613070d4fb02c8d35c910837e5aaf'; // Replace with your API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const weatherInfo = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
            document.getElementById('weather-info').innerHTML = weatherInfo;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            document.getElementById('weather-info').innerHTML = '<p>Unable to fetch weather data. Please try again later.</p>';
        });
}
