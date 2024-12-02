document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('nav a');

  links.forEach(link => {
    // Add hover effect
    link.addEventListener('mouseover', () => {
      link.style.color = '#ff9800';
      link.style.transform = 'scale(1.1)'; // Slightly enlarge on hover
      link.style.transition = 'transform 0.3s ease, color 0.3s ease';
    });

    link.addEventListener('mouseout', () => {
      link.style.color = '#00bcd4';
      link.style.transform = 'scale(1)'; // Reset size
    });

    // Add focus effect for keyboard navigation
    link.addEventListener('focus', () => {
      link.style.outline = '2px solid #ff9800';
      link.style.outlineOffset = '4px';
    });

    link.addEventListener('blur', () => {
      link.style.outline = 'none';
    });

    // Highlight the active page
    const currentUrl = window.location.pathname;
    if (link.getAttribute('href') === currentUrl) {
      link.style.color = '#ff9800';
      link.style.fontWeight = 'bold';
      link.style.borderBottom = '2px solid #ff9800';
    }
  });

  // Add a responsive mobile menu toggle
  const nav = document.querySelector('nav');
  const toggleButton = document.createElement('button');
  toggleButton.textContent = 'Menu';
  toggleButton.style.background = '#00bcd4';
  toggleButton.style.color = '#fff';
  toggleButton.style.border = 'none';
  toggleButton.style.padding = '10px 20px';
  toggleButton.style.cursor = 'pointer';
  toggleButton.style.margin = '10px';
  toggleButton.style.borderRadius = '5px';

  nav.parentElement.insertBefore(toggleButton, nav);

  toggleButton.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
    nav.style.transition = 'display 0.5s ease';
  });

  // Adjust nav display based on window resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      nav.style.display = 'flex';
    } else {
      nav.style.display = 'none';
    }
  });
});
