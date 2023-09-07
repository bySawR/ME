<script>    
        function showSection(sectionId) {
            // Hide the current section (if any)
            const currentSection = document.querySelector('.section:target');
            if (currentSection) {
                currentSection.style.display = 'none';
            }

            // Hide all sections
            const sections = document.querySelectorAll('.section');
            sections.forEach((section) => {
                section.style.display = 'none';
            });

            // Show the selected section
            const selectedSection = document.getElementById(sectionId);
            selectedSection.style.display = 'block';

            // Update the URL hash fragment
            window.location.hash = sectionId;
        }

        function updateNameDisplay() {
            const nameElement = document.getElementById('name');
            const initialsElement = document.getElementById('initials');
            const isMobile = window.innerWidth <= 1024;

            if (isMobile) {
                nameElement.style.display = 'none';

                if (!initialsElement) {
                    const newInitialsElement = document.createElement('h1');
                    newInitialsElement.id = 'initials';
                    newInitialsElement.textContent = 'ME';
                    nameElement.parentNode.insertBefore(newInitialsElement, nameElement);
                }

                window.location.hash = 'home';
            } else {
                if (initialsElement) {
                    nameElement.style.display = 'block';
                    initialsElement.parentNode.removeChild(initialsElement);
                }

                window.location.hash = '';
            }
        }

        function filterProjectsByTag(selectedTag) {
            const projectWrappers = document.querySelectorAll('.case-wrapper');
            projectWrappers.forEach((wrapper) => {
                const tags = wrapper.getAttribute('data-tags').split(' ');
                if (tags.includes(selectedTag) || selectedTag === 'all') {
                    wrapper.style.display = 'block';
                } else {
                    wrapper.style.display = 'none';
                }
            });
        }

        function addFilterButtonListeners() {
            const filterButtons = document.querySelectorAll('.filter-tags button');
            filterButtons.forEach((button) => {
                button.addEventListener('click', () => {
                    const selectedTag = button.getAttribute('data-tag');

                    // Toggle the 'active' class for buttons
                    filterButtons.forEach((btn) => {
                        btn.classList.toggle('active', btn === button);
                    });

                    // Filter projects based on the selected tag
                    filterProjectsByTag(selectedTag);
                });
            });
        }

        // Initialize on DOMContentLoaded
        document.addEventListener('DOMContentLoaded', () => {
            // Check the initial screen width
            updateNameDisplay();

            // Add an event listener for screen width changes
            window.addEventListener('resize', updateNameDisplay);

            // Add filter button listeners
            addFilterButtonListeners();
        });
</script>
