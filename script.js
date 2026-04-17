// Jednostavna validacija i interakcija forme
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Hvala vam na interesovanju! Naš tim će vas kontaktirati uskoro.');
    this.reset();
});

// Efekat promene boje navigacije pri skrolovanju
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = '#1a252f';
    } else {
        nav.style.background = '#2c3e50';
    }
});