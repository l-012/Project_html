const questions = document.querySelectorAll('.faq-question');
questions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.style.display = (answer.style.display === 'none' || answer.style.display === '') ? 'block' : 'none';
    });
});
