// Intersection Observer code
function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}

// Create an Intersection Observer
const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
});

// Add elements with the "fade-up" class to the observer
const fadeUpElements = document.querySelectorAll('.fade-up');
fadeUpElements.forEach((element) => {
    observer.observe(element);
});


document.addEventListener('DOMContentLoaded', function () {
    const projectWrappers = document.querySelectorAll('.case-wrapper');
    const filterButtons = document.querySelectorAll('.filter-tags button');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedTag = button.getAttribute('data-tag');
            
            // Hide all projects initially
            projectWrappers.forEach(wrapper => {
                wrapper.style.display = 'none';
            });

            // Show projects with the selected data-tag
            projectWrappers.forEach(wrapper => {
                const projectTags = wrapper.getAttribute('data-tags');
                if (projectTags && projectTags.includes(selectedTag)) {
                    wrapper.style.display = 'block';
                }
            });
        });
    });
});


function showSection(sectionId, scrollToProsjekter) {
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

    // Check if scrollToProsjekter is true, and scroll to the Prosjekter section within the Home section
    if (scrollToProsjekter && sectionId === 'home') {
        const prosjekterSection = document.getElementById('prosjekter');
        if (prosjekterSection) {
            // Calculate the position of the Prosjekter section relative to the viewport
            const offset = prosjekterSection.getBoundingClientRect().top;

            // Scroll to the Prosjekter section manually
            window.scrollTo({
                top: window.scrollY + offset,
                behavior: 'smooth',
            });
        }
    }
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
            const isAlreadySelected = button.classList.contains('selected');

            // Remove the 'selected' class from all buttons
            filterButtons.forEach(btn => {
                btn.classList.remove('selected');
            });

            // Show all projects when "Show All" is clicked or the button is already selected
            if (selectedTag === 'all' || isAlreadySelected) {
                projectWrappers.forEach(wrapper => {
                    wrapper.style.display = 'block';
                });
            } else {
                // Add the 'selected' class to the clicked button
                button.classList.add('selected');

                // Hide all projects initially
                projectWrappers.forEach(wrapper => {
                    wrapper.style.display = 'none';
                });

                // Show projects with the selected data-tag
                projectWrappers.forEach(wrapper => {
                    const projectTags = wrapper.getAttribute('data-tags');
                    if (projectTags && projectTags.includes(selectedTag)) {
                        wrapper.style.display = 'block';
                    }
                });
            }
        });
    });
});

    // JavaScript to create the typewriter effect and change the text
    const textElement = document.getElementById('typewriter');
    const name1 = "Digitaliseringsdirektoratet";
    const name2 = "Digdir";
    let isDeleting = false;
    let nameIndex = 0;
    let charIndex = 0;
    let typingSpeed = 80;

    textElement.textContent = ''; // Initialize with an empty string

    function type() {
      const name = (nameIndex === 0) ? name1 : name2;
      const currentText = name.substring(0, charIndex + 1);

      textElement.textContent = currentText;

      if (isDeleting) {
        charIndex--;

        if (charIndex >= 0) {
          setTimeout(type, typingSpeed);
        } else {
          isDeleting = false;
          nameIndex = (nameIndex + 1) % 2;
          setTimeout(type, typingSpeed);
        }
      } else {
        charIndex++;

        if (charIndex <= name.length) {
          setTimeout(type, typingSpeed);
        } else {
          isDeleting = true;
          if (nameIndex === 0) {
            setTimeout(type, 1000);
          } else {
            setTimeout(reset, 3000);
          }
        }
      }
    }

    function reset() {
      textElement.textContent = '';
      charIndex = 0;
      isDeleting = false;
      nameIndex = 0;
      setTimeout(type, 0);
    }

    setTimeout(type, 1000);

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

