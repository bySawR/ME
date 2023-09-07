function showSection(sectionId) {
    // Check if a hash fragment exists in the URL
    if (window.location.hash) {
        // Hide the section associated with the current hash fragment
        const currentSectionId = window.location.hash.substring(1);
        const currentSection = document.getElementById(currentSectionId);
        if (currentSection) {
            currentSection.style.display = 'none';
        }
    }

    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block';

    // Update the URL hash fragment
    window.location.hash = sectionId;
}

window.addEventListener('DOMContentLoaded', function () {
  const nameElement = document.getElementById('name');
  
  function updateNameDisplay() {
    if (window.innerWidth <= 1024) {
      nameElement.style.display = 'none';
      // Create and append a new <h1> element with "ME" if it doesn't exist
      if (!document.getElementById('initials')) {
        const initialsElement = document.createElement('h1');
        initialsElement.id = 'initials';
        initialsElement.textContent = 'ME';
        nameElement.parentNode.insertBefore(initialsElement, nameElement);
      }
      // Update the URL hash fragment to link to the home section
      window.location.hash = 'home';
    } else {
      // Remove the "ME" element and display the full name
      const initialsElement = document.getElementById('initials');
      if (initialsElement) {
        nameElement.style.display = 'block';
        initialsElement.parentNode.removeChild(initialsElement);
      }
      // Remove the URL hash fragment
      window.location.hash = '';
    }
  }

  // Check the initial screen width
  updateNameDisplay();
  
  // Add an event listener for screen width changes
  window.addEventListener('resize', updateNameDisplay);
});

document.addEventListener('DOMContentLoaded', function () {
    const projectWrappers = document.querySelectorAll('.case-wrapper');
    const filterButtons = document.querySelectorAll('.filter-tags button');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedTag = button.getAttribute('data-tag');

            // Check if the button is already active
            if (button.classList.contains('active')) {
                // Deactivate all buttons and show all projects
                filterButtons.forEach(btn => btn.classList.remove('active'));
                projectWrappers.forEach(wrapper => {
                    wrapper.style.display = 'block';
                });
            } else {
                // Activate the clicked button and filter projects by tag
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                projectWrappers.forEach(wrapper => {
                    const tags = wrapper.getAttribute('data-tags').split(' ');
                    if (tags.includes(selectedTag) || selectedTag === 'all') {
                        wrapper.style.display = 'block';
                    } else {
                        wrapper.style.display = 'none';
                    }
                });
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".filter-tags button");
    
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            // Toggle the 'active' class on the clicked button
            this.classList.toggle("active");
        });
    });
});
