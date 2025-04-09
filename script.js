// Add smooth scrolling for navigation links
const links = document.querySelectorAll('nav a');
links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 60, // Adjust for fixed nav height
            behavior: 'smooth'
        });
    });
});
