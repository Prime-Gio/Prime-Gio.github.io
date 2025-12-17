const currentPath = window.location.pathname;

document.querySelectorAll('.navbar a').forEach(link => {
  const linkPath = new URL(link.href).pathname;

  if (linkPath === currentPath) {
    link.classList.add('active');
  }
});

var swiper = new Swiper(".mySwiper", {
  // Optional: Makes slides centered with partial view of others
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
  
  // Enable the "dots" at the bottom
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  
  // HERE IS THE KEY FEATURE YOU ASKED FOR:
  autoplay: {
    delay: 3000, // Time in ms before changing (3000ms = 3 seconds)
    disableOnInteraction: false, // Keeps autoplaying even after user swipes
  },
  
  // Makes the sliding animation smooth
  speed: 1000,
  loop: true, // Allows it to go from the last slide back to the first smoothly
});