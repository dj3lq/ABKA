document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
      link.addEventListener('mouseover', () => {
        link.style.color = '#ff9800';
      });
      link.addEventListener('mouseout', () => {
        link.style.color = '#00bcd4';
      });
    });
  });
  