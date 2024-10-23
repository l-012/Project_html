const themeIcon = document.getElementById('theme-icon');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeIcon.textContent = ' ☾ ';
} else {
    themeIcon.textContent = ' ☀︎ ';
}

themeIcon.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        themeIcon.textContent = ' ☾ ';
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.textContent = ' ☀︎ ';
        localStorage.setItem('theme', 'light');
    }
});

const images = [
    "Home_img.png",
    "Home_img2.png",
    "Home_img3.png"
];

let currentImageIndex = 0;

const galleryImage = document.getElementById("gallery-image");
const backButton = document.getElementById("back-btn");
const nextButton = document.getElementById("next-btn");
const imageLink = document.getElementById("image-link");

function updateImage() {
    galleryImage.src = images[currentImageIndex];
}

nextButton.addEventListener("click", function(event) {
    event.stopPropagation();
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    updateImage();
});

backButton.addEventListener("click", function(event) {
    event.stopPropagation();
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    updateImage();
});

imageLink.addEventListener("click", function(event) {});

updateImage();

const products = [
    { id: 1, name: "Aloe Vera Gel", category: "Skincare" },
    { id: 2, name: "Vitamin C Serum", category: "Skincare" },
    { id: 3, name: "Hydrating Cream", category: "Moisturizer" },
    { id: 4, name: "Sunblock SPF 50", category: "Sunscreen" },
    { id: 5, name: "Anti-Aging Serum", category: "Skincare" },
];

document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const resultContainer = document.getElementById('search-results');

    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
    });

    searchInput.addEventListener('input', debounce(function() {
        const query = searchInput.value.trim();
        if (query.length > 0) {
            resultContainer.style.display = 'block';
            const results = products.filter(product => 
                product.name.toLowerCase().includes(query.toLowerCase())
            );
            resultContainer.innerHTML = '';
            if (results.length === 0) {
                resultContainer.innerHTML = '<div>No results found.</div>';
            } else {
                results.forEach(result => {
                    const productItem = document.createElement('div');
                    productItem.textContent = result.name;
                    resultContainer.appendChild(productItem);
                });
            }
        } else {
            resultContainer.style.display = 'none';
        }
    }, 300));

    function debounce(func, delay) {
        let timeout;
        return function() {
            clearTimeout(timeout);
            timeout = setTimeout(func, delay);
        };
    }
});

const saleEndTime = new Date('2024-10-30T23:59:59').getTime();
const countdownElement = document.getElementById('countdown');

const countdownInterval = setInterval(function() {
    const now = new Date().getTime();
    const timeLeft = saleEndTime - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (timeLeft <= 0) {
        clearInterval(countdownInterval);
        countdownElement.innerHTML = "Sale Ended";
        countdownElement.classList.add("sale-ended");
    }
}, 1000);
