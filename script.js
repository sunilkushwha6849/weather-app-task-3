const button = document.getElementById("btn");
const result = document.getElementById("result");

button.addEventListener("click", getWeather);

function getWeather() {
    const city = document.getElementById("city").value;

    if (city === "") {
        result.innerHTML = "❗ Please enter city name";
        return;
    }

    fetch("https://goweather.herokuapp.com/weather/" + city)
        .then(response => response.json())
        .then(data => {

            if (!data.temperature) {
                result.innerHTML = "❌ City not found";
                return;
            }

            result.innerHTML = `
                <div class="temp">${data.temperature}</div>
                <div>🌬 Wind: ${data.wind}</div>
                <div>☁ ${data.description}</div>
            `;
        })
        .catch(() => {
            result.innerHTML = "⚠ Error loading data";
        });
}
