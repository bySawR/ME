document.addEventListener("DOMContentLoaded", function () {
    // Set up the IntersectionObserver to detect when elements enter the viewport
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Fade in when it enters
                observer.unobserve(entry.target); // Stop observing so it stays visible forever
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
