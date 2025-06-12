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

const allLink = document.querySelector("#All")
const toysLink = document.querySelector("#Toys")
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
    const container = document.querySelector(".products")
    if (container) {
        const html = filteredProducts.map(productTemplate)
        container.innerHTML = html.join("");
    }
}

if (toysLink) {
    toysLink.addEventListener("click", () => {
        displayProducts(products.filter(product => (product.productType.includes("toy"))));
        localStorage.setItem("selectedFilter", "toy")
    })
}
if (diapersLink) {
    diapersLink.addEventListener("click", () => {
        displayProducts(products.filter(product => (product.productType.includes("diaper"))));
        localStorage.setItem("selectedFilter", "diaper")
    })
}

if (clothesLink) {
    clothesLink.addEventListener("click", () => {
        displayProducts(products.filter(product => (product.productType.includes("clothes"))));
        localStorage.setItem("selectedFilter", "clothes")
    })
}

if (accessoriesLink) {
    accessoriesLink.addEventListener("click", () => {
        displayProducts(products.filter(product => (product.productType.includes("accessory"))));
        localStorage.setItem("selectedFilter", "accessory")
    })
}

if (careLink) {
    careLink.addEventListener("click", () => {
        displayProducts(products.filter(product => (product.productType.includes("home&care"))));
        localStorage.setItem("selectedFilter", "home&care")
    })
}

if (allLink) {
    allLink.addEventListener("click", () => {
        displayProducts(products);
        localStorage.setItem("selectedFilter", "all")
    })
}

window.addEventListener("DOMContentLoaded", () => {
    const savedFilter = localStorage.getItem("selectedFilter")

    if (savedFilter && savedFilter !== "all") {
        const filtered = products.filter(product => product.productType.includes(savedFilter))
        displayProducts(filtered)
    }
    else {
        displayProducts(products)
    }
});