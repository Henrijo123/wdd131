const year = document.querySelector("#currentyear");
const date = document.querySelector("#lastModified");
const today = new Date();
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation")

hamButton.addEventListener("click", () => {
    hamButton.classList.toggle("open");
    navigation.classList.toggle("open");
})

const products = [
    {
        productType: "clothes",
        imageUrl: "images/clothes.webp"
    },
    {
        productType: "clothes",
        imageUrl: "images/clothes2.webp"
    },
    {
        productType: "clothes",
        imageUrl: "images/clothes3.webp"
    },
    {
        productType: "clothes",
        imageUrl: "images/clothes4.webp"
    },
    {
        productType: "clothes",
        imageUrl: "images/clothes5.webp"
    },
    {
        productType: "accessory",
        imageUrl: "images/accessories.webp"
    },
    {
        productType: "accessory",
        imageUrl: "images/accessories2.webp"
    },
    {
        productType: "accessory",
        imageUrl: "images/accessories3.webp"
    },
    {
        productType: "accessory",
        imageUrl: "images/accessories4.webp"
    },
    {
        productType: "accessory",
        imageUrl: "images/accessories5.webp"
    },
    {
        productType: "diaper",
        imageUrl: "images/diaper.webp"
    },
    {
        productType: "diaper",
        imageUrl: "images/diaper2.webp"
    },
    {
        productType: "diaper",
        imageUrl: "images/diaper3.webp"
    },
    {
        productType: "diaper",
        imageUrl: "images/diaper4.webp"
    },
    {
        productType: "diaper",
        imageUrl: "images/diaper5.webp"
    },
    {
        productType: "toy",
        imageUrl: "images/toys.webp"
    },
    {
        productType: "toy",
        imageUrl: "images/toys1.webp"
    },
    {
        productType: "toy",
        imageUrl: "images/toys2.webp"
    },
    {
        productType: "toy",
        imageUrl: "images/toys3.webp"
    },
    {
        productType: "toy",
        imageUrl: "images/toys4.webp"
    },
    {
        productType: "home&care",
        imageUrl: "images/food&care.webp"
    },
    {
        productType: "home&care",
        imageUrl: "images/food&care2.webp"
    },
    {
        productType: "home&care",
        imageUrl: "images/food&care3.webp"
    },
    {
        productType: "home&care",
        imageUrl: "images/food&care4.webp"
    },
    {
        productType: "home&care",
        imageUrl: "images/food&care5.webp"
    }
]

const allLink = document.querySelector("#all")
const toysLink = document.querySelector("#toys")
const diapersLink = document.querySelector("#Diapers")
const clothesLink = document.querySelector("#Clothes")
const accessoriesLink = document.querySelector("#Accessories")
const careLink = document.querySelector("#care")

function productTemplate(product) {
    return `<figure class="border">
                <img src="${product.imageUrl}" alt="${product.productType} image" loading="lazy"/>
            </figure>`
}

function displayProducts(filteredProducts) {
    const html = filteredProducts.map(productTemplate)
    document.querySelector(".products").innerHTML = html.join("");
}

toysLink.addEventListener("click", () => {
    displayProducts(products.filter(product => (product.productType.includes("toy"))));
})
diapersLink.addEventListener("click", () => {
    displayProducts(products.filter(product => (product.productType.includes("diaper"))));
})
clothesLink.addEventListener("click", () => {
    displayProducts(products.filter(product => (product.productType.includes("clothes"))));
})
accessoriesLink.addEventListener("click", () => {
    displayProducts(products.filter(product => (product.productType.includes("accessory"))));
})
careLink.addEventListener("click", () => {
    displayProducts(products.filter(product => (product.productType.includes("home&care"))));
})
allLink.addEventListener("click", () => {
    displayProducts(products);
})

displayProducts(products)