function submitQuiz() {
    const answers = {
        q1: document.querySelector('input[name="q1"]:checked'),
        q2: document.querySelector('input[name="q2"]:checked'),
        q3: document.querySelector('input[name="q3"]:checked'),
    };

    if (!answers.q1 || !answers.q2 || !answers.q3) {
        alert("Please answer all the questions.");
        return;
    }

    let skinType = '';
    let suggestions = [];

    // Determine skin type
    if (answers.q1.value === 'dry' && answers.q2.value === 'no' && answers.q3.value === 'dry') {
        skinType = 'Dry Skin';
        suggestions = ['Hydrating Moisturizer', 'Gentle Cleanser', 'Nourishing Face Mask'];
    } else if (answers.q1.value === 'oily' || answers.q2.value === 'yes' || answers.q3.value === 'oily') {
        skinType = 'Oily Skin';
        suggestions = ['Oil-Free Cleanser', 'Exfoliating Scrub', 'Light Moisturizer'];
    } else if (answers.q1.value === 'normal' && answers.q2.value === 'no' && answers.q3.value === 'balanced') {
        skinType = 'Normal Skin';
        suggestions = ['Gentle Cleanser', 'Lightweight Moisturizer', 'Soothing Toner'];
    } else {
        skinType = 'Combination Skin';
        suggestions = ['Balancing Cleanser', 'Oil-Control Moisturizer', 'Exfoliating Toner'];
    }

    // Display the results
    document.getElementById('skin-type').textContent = skinType;
    const productSuggestions = document.getElementById('product-suggestions');
    productSuggestions.innerHTML = '';
    suggestions.forEach(product => {
        const li = document.createElement('li');
        li.textContent = product;
        productSuggestions.appendChild(li);
    });

    document.getElementById('results').style.display = 'block';
}
