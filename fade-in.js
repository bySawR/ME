document.addEventListener("DOMContentLoaded", function () {
    // Set up the IntersectionObserver to detect when project-wrapper enters or leaves the viewport
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Check if the project-wrapper is intersecting (in the viewport)
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Add 'visible' class to fade in
            } else {
                entry.target.classList.remove('visible'); // Remove 'visible' class to fade out
            }
        });
    }, {
        threshold: 0.2, // Trigger when 50% of the element is in the viewport
    });

    // Target all .project-wrapper elements for observation
    const projectWrappers = document.querySelectorAll('.project-wrapper');
    projectWrappers.forEach(wrapper => {
        observer.observe(wrapper);
    });
});
