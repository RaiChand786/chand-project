document.addEventListener("DOMContentLoaded", function() {
    // Toggle mobile navigation menu
    const nav = document.querySelector("nav ul");
    const toggleButton = document.createElement("button");
    toggleButton.innerText = "Menu";
    toggleButton.classList.add("nav-toggle");
    nav.parentNode.insertBefore(toggleButton, nav);

    toggleButton.addEventListener("click", function() {
        nav.classList.toggle("visible");
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Add functionality to buttons
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function() {
            this.classList.add('clicked');
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 1000);
        });
    });
});
