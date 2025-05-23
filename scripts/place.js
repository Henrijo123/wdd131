const year = document.querySelector("#currentyear");
const date = document.querySelector("#lastModified");
const today = new Date();
const chillWind = document.getElementById("chill-wind");
const tempText = document.getElementById("degrees").textContent;
const windText = document.getElementById("wind").textContent;

const temp = parseFloat(tempText);
const windSpeedKmph = parseFloat(windText);
const windChill = calculateWindChill(temp, windSpeedKmph);

function calculateWindChill(temp, windSpeedKmph) {
    if (temp > 10 || windSpeedKmph <= 4.8) {
        return 'N/A';
    }

    const windChill = 13.12 + 0.6215 * temp
        - 11.37 * Math.pow(windSpeedKmph, 0.16)
        + 0.3965 * temp * Math.pow(windSpeedKmph, 0.16);
    return windChill.toFixed(2);
}

year.innerHTML = `&copy<span class="highlight">${today.getFullYear()} </span>`;

date.innerHTML = `Last Modified: <span id="lastModified">${new Intl.DateTimeFormat(
    "en-US",
    {
        dateStyle: "short"
    }
).format(today)} ${today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()}</span>`;

chillWind.textContent = `${windChill} °C`;