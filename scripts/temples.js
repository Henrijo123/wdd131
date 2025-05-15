const year = document.querySelector("#currentyear");
const date = document.querySelector("#lastModified");
const today = new Date();
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation")

year.innerHTML = `&copy<span class="highlight">${today.getFullYear()} </span>`;

date.innerHTML = `Last Modified: <span id="lastModified">${new Intl.DateTimeFormat(
    "en-US",
    {
        dateStyle: "short"
    }
).format(today)} ${today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()}</span>`;

hamButton.addEventListener("click", () => {
    hamButton.classList.toggle("open");
    navigation.classList.toggle("open");
})