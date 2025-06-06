const year = document.querySelector("#currentyear");
const date = document.querySelector("#lastModified");
const today = new Date();
const select = document.querySelector("#product")

year.innerHTML = `&copy<span class="highlight">${today.getFullYear()} </span>`;

date.innerHTML = `Last Modified: <span id="lastModified">${new Intl.DateTimeFormat(
    "en-US",
    {
        dateStyle: "short"
    }
).format(today)} ${today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()}</span>`;

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

products.forEach(product => {
    select.innerHTML += `<option value="${product.id}">${product.name}</option>`;
});