document.addEventListener('DOMContentLoaded', () => {
  // Select all navigation links
  const links = document.querySelectorAll('nav a');

  // Loop through each link to add interactivity
  links.forEach(link => {
     // Add hover effect to change color and slightly enlarge
    link.addEventListener('mouseover', () => {
      link.style.color = '#ff9800';  // Change text color to orange
      link.style.transform = 'scale(1.1)'; // Slightly enlarge on hover
      link.style.transition = 'transform 0.3s ease, color 0.3s ease'; // Smooth transition effect
    });

    // Reset styles when hover is removed
    link.addEventListener('mouseout', () => {
      link.style.color = '#00bcd4'; // Reset to default blue color
      link.style.transform = 'scale(1)'; // Reset size
    });

    // Add focus effect for keyboard navigation (accessibility)
    link.addEventListener('focus', () => {
      link.style.outline = '2px solid #ff9800';  // Highlight with an orange outline
      link.style.outlineOffset = '4px';  // Add space around the outline
    });

     // Remove outline when focus is lost
    link.addEventListener('blur', () => { 
      link.style.outline = 'none'; // Remove outline
    });

    // Highlight the active page based on URL
    const currentUrl = window.location.pathname; // Get current page URL
    if (link.getAttribute('href') === currentUrl) {
      link.style.color = '#ff9800'; // Set active link color
      link.style.fontWeight = 'bold';  // Make text bold
      link.style.borderBottom = '2px solid #ff9800'; // Add an underline effect
    }
  });

  // responsive mobile menu toggle
  const nav = document.querySelector('nav'); // Select the navigation menu
  const toggleButton = document.createElement('button');  // Create a button element

  // Set button properties (appearance & text)
  toggleButton.textContent = 'Menu';
  toggleButton.style.background = '#00bcd4'; // Background color
  toggleButton.style.color = '#fff'; // Text color
  toggleButton.style.border = 'none';  // Remove border
  toggleButton.style.padding = '10px 20px';  // Add padding
  toggleButton.style.cursor = 'pointer'; // Change cursor to pointer
  toggleButton.style.margin = '10px';  // Add margin
  toggleButton.style.borderRadius = '5px'; // Round corners

   // Insert the button before the navigation menu
  nav.parentElement.insertBefore(toggleButton, nav);

   // Toggle navigation menu visibility when button is clicked
  toggleButton.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
    nav.style.transition = 'display 0.5s ease';
  });

  // Adjust nav display based on window resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      nav.style.display = 'flex';  // Show menu on larger screens
    } else {
      nav.style.display = 'none'; // Hide menu on smaller screens
    }
  });
});
