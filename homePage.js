// Handle Dark Mode Toggle
const themeIcon = document.getElementById('theme-icon');

// Check the user's preference in localStorage
const currentTheme = localStorage.getItem('theme');

// Apply dark mode and set the correct icon if it was previously selected
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeIcon.textContent = ' ☾ '; // Moon icon for dark mode
} else {
    themeIcon.textContent = ' ☀︎ '; // Sun icon for light mode
}

// Toggle dark mode and switch icons on icon click
themeIcon.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    // Change icon based on mode
    if (document.body.classList.contains('dark-mode')) {
        themeIcon.textContent = ' ☾ '; // Switch to moon icon
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.textContent = ' ☀︎ '; // Switch to sun icon
        localStorage.setItem('theme', 'light');
    }
});

// Handle Image Gallery
const images = [
    "Home_img.png",   // First image
    "Home_img2.png",  // Second image
    "Home_img3.png"   // Third image
];

let currentImageIndex = 0;  // Track the current image index

const galleryImage = document.getElementById("gallery-image");  // Get the image element
const backButton = document.getElementById("back-btn");  // Get the back button
const nextButton = document.getElementById("next-btn");  // Get the next button
const imageLink = document.getElementById("image-link");  // Get the image link

// Function to update the image source
function updateImage() {
    galleryImage.src = images[currentImageIndex];  // Set the current image
}

// Event listener for the next button
nextButton.addEventListener("click", function(event) {
    event.stopPropagation();  // Prevent the link from opening when clicking Next

    currentImageIndex++;  // Move to the next image

    // If we've reached the end, loop back to the first image
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }

    updateImage();  // Update the image shown
});

// Event listener for the back button
backButton.addEventListener("click", function(event) {
    event.stopPropagation();  // Prevent the link from opening when clicking Back

    currentImageIndex--;  // Move to the previous image

    // If we're at the first image, loop back to the last image
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }

    updateImage();  // Update the image shown
});

// Event listener for the image link to open the link when the image is clicked
imageLink.addEventListener("click", function(event) {
    // Allow the link to open when the image itself is clicked
});

// Initialize the gallery with the first image
updateImage();

// Handle Product Search
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

    // Prevent form submission when pressing Enter
    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
    });

    // Listen for input changes in the search bar
    searchInput.addEventListener('input', debounce(function() {
        const query = searchInput.value.trim();

        // Show the results container if there is a query
        if (query.length > 0) {
            resultContainer.style.display = 'block';  // Show results

            // Filter products based on search query
            const results = products.filter(product => 
                product.name.toLowerCase().includes(query.toLowerCase())
            );

            resultContainer.innerHTML = '';  // Clear previous results
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
            resultContainer.style.display = 'none';  // Hide results if query is empty
        }
    }, 300));  // Delay for debounce (300ms)

    // Debounce function to limit the frequency of API calls
    function debounce(func, delay) {
        let timeout;
        return function() {
            clearTimeout(timeout);
            timeout = setTimeout(func, delay);
        };
    }
});

// Handle Flash Sale Countdown
const saleEndTime = new Date('2024-10-30T23:59:59').getTime();
const countdownElement = document.getElementById('countdown');

// Update the countdown every 1 second
const countdownInterval = setInterval(function() {
    const now = new Date().getTime();
    const timeLeft = saleEndTime - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (timeLeft <= 0) {
        clearInterval(countdownInterval);
        countdownElement.innerHTML = "Sale Ended";
        countdownElement.classList.add("sale-ended");  // Apply Sale Ended styling
    }
}, 1000);
