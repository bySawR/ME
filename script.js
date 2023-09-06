
<script>
  // Create a button element
  const btnScrollToTop = document.createElement('button');

  // Set the button's ID and aria-label for accessibility
  btnScrollToTop.id = 'scroll-to-top';
  btnScrollToTop.setAttribute('aria-label', 'Scroll to Top');

  // Style the button
  btnScrollToTop.style.position = 'fixed';
  btnScrollToTop.style.bottom = '20px';
  btnScrollToTop.style.right = '20px';
  btnScrollToTop.style.backgroundColor = 'transparent';
  btnScrollToTop.style.color = '#FFFFFF'; // set text color to #1C172C
  btnScrollToTop.style.border = '1px solid #FFFFFF'; // set border color to #FFFFFF
  btnScrollToTop.style.borderRadius = '50%'; // make the button a perfect circle
  btnScrollToTop.style.width = '40px'; // set the width of the button to 40px
  btnScrollToTop.style.height = '40px'; // set the height of the button to 40px
  btnScrollToTop.style.padding = '0';
  btnScrollToTop.style.fontSize = '16px';
  btnScrollToTop.style.cursor = 'pointer';
  btnScrollToTop.style.opacity = '0';
  btnScrollToTop.style.transition = 'opacity 0.3s';

  const arrowUpIcon = document.createElement('div');
  arrowUpIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#FFFFFF" d="M6.7 14.7q-.275-.275-.275-.7t.275-.7l4.6-4.6q.15-.15.325-.212T12 8.425q.2 0 .388.075t.312.2l4.6 4.6q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275L12 10.8l-3.9 3.9q-.275.275-.7.275t-.7-.275Z"></path></svg>';
  arrowUpIcon.style.paddingBottom = '1px';

  btnScrollToTop.appendChild(arrowUpIcon);

  // Add the button to the body of the page
  document.body.appendChild(btnScrollToTop);

  // Add a scroll event listener to the window
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 0) {
      // If the user has scrolled down the page, show the button with fade in effect
      btnScrollToTop.style.opacity = '1';
    } else {
      // If the user has scrolled back to the top, hide the button with fade out effect
      btnScrollToTop.style.opacity = '0';
    }
  });

// Add a click event listener to the button
btnScrollToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  setTimeout(() => {
    btnScrollToTop.style.transition = 'opacity 0.3s'; // add a 0.3s transition to the fade-in effect
    btnScrollToTop.style.opacity = '1'; // set the opacity to 1 for the fade-in effect
    btnScrollToTop.style.opacity = '0';
  }, 300); // delay changing the opacity to 0 by 300 milliseconds for the fade out effect
});


// Add a hover effect to the button
btnScrollToTop.addEventListener('mouseover', () => {
btnScrollToTop.style.backgroundColor = 'rgba(0, 0, 0, 0.03)'; // set 30% grey color when hovering the circle
btnScrollToTop.style.transition = 'background-color 0.3s'; // add 0.3s transition to the hover color
});

// Add a hover-out effect to the button
btnScrollToTop.addEventListener('mouseout', () => {
btnScrollToTop.style.backgroundColor = 'transparent'; // remove the hover color
btnScrollToTop.style.transition = 'background-color 0.3s'; // add 0.3s transition to the hover color
});
</script>
<script>
// Function to handle the intersection observer callback
function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        } else {
            entry.target.classList.remove('visible'); // Remove the 'visible' class when the element is not in the viewport
        }
    });
}

// Create an Intersection Observer
const observer = new IntersectionObserver(handleIntersection, {
    root: null, // Use the viewport as the root
    rootMargin: '0px', // No margin
    threshold: 0.2, // Trigger when 20% of the element is visible
});

// Add elements with the "fade-up" class to the observer
const fadeUpElements = document.querySelectorAll('.fade-up');
fadeUpElements.forEach((element) => {
    observer.observe(element);
});
</script>