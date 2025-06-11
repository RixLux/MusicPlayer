const sidebar = document.querySelector('.sidebar');
const toggleButton = document.getElementById('toggle-sidebar-btn');

// Toggle sidebar with button
toggleButton.addEventListener('click', () => {
  sidebar.classList.toggle('hidden');
});

// Detect swipe gestures
let startX = 0;

document.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

document.addEventListener('touchend', (e) => {
  const endX = e.changedTouches[0].clientX;
  const diff = endX - startX;

  if (diff > 50) {
    // Swipe right to show
    sidebar.classList.remove('hidden');
  } else if (diff < -50) {
    // Swipe left to hide
    sidebar.classList.add('hidden');
  }
});
