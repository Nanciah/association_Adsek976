document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Message envoyé ! Merci pour votre contact.');
            form.reset();
        });
    }
});