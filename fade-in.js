document.addEventListener("DOMContentLoaded", function () {
    // Set up the IntersectionObserver to detect when elements enter or leave the viewport
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Check if the element is intersecting (in the viewport)
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Add 'visible' class to fade in
            } else {
                entry.target.classList.remove('visible'); // Remove 'visible' class to fade out
            }
        });
    }, {
        threshold: 0.2, // Trigger when 20% of the element is in the viewport
    });

    // Target all .project-wrapper and <section> elements for observation
    const elementsToObserve = document.querySelectorAll('.project-wrapper, section');
    elementsToObserve.forEach(element => {
        observer.observe(element);
    });
});
