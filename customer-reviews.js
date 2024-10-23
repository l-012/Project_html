document.getElementById('review-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const rating = document.getElementById('rating').value;
    const reviewText = document.getElementById('review-text').value;

    if (name && rating && reviewText) {
        const reviewContainer = document.createElement('div');
        reviewContainer.classList.add('review');

        const reviewHeader = document.createElement('h3');
        reviewHeader.textContent = name;

        const reviewRating = document.createElement('p');
        reviewRating.textContent = '⭐'.repeat(rating);

        const reviewBody = document.createElement('p');
        reviewBody.textContent = reviewText;

        reviewContainer.appendChild(reviewHeader);
        reviewContainer.appendChild(reviewRating);
        reviewContainer.appendChild(reviewBody);

        document.getElementById('reviews-container').appendChild(reviewContainer);

        // Clear form after submission
        document.getElementById('review-form').reset();
    } else {
        alert('Please fill in all fields');
    }
});
