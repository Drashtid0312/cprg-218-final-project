document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("toggle");
    const menu = document.getElementById("menu");

    toggle.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
});

fetch("https://api.openweathermap.org/data/2.5/weather?q=Cancun&appid=2c73a53cc2ebd8ace7383f9f60355d22&units=metric")
.then(response => response.json())
.then(data => {
    const weather = document.getElementById("weather");
    weather.textContent = `${data.name}: ${data.main.temp}\u00b0C`;
})
.catch(error => {
    console.error("Error fetching weather data:", error);
});