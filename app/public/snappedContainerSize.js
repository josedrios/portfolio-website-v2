document.addEventListener('DOMContentLoaded', () => {
  // Get container by ID
  const container = document.getElementById('website-container');
  // Increment of container will be by 20px
  const increment = 20;

  // If container does not exist, do not run
  if (!container) {
    console.warn('#website-container not found. Snapping script aborted.');
    return;
  }

  function setContainerDimensions() {
    // WIDTH SET UP
    // Temporarily set width to get the full available width
    container.style.width = 'auto';

    // Ensure parentElement exists before attempting to access its clientWidth
    if (container.parentElement) {
      const parentWidth = container.parentElement.clientWidth;
      const snappedWidth = Math.floor(parentWidth / increment) * increment;
      container.style.width = `${snappedWidth + 1}px`;
    } else {
      console.warn('Parent element for #website-container not found for width calculation.');
    }

    // HEIGHT SET UP
    // Temporarily set height to get the full available height
    container.style.height = 'auto';

    // Ensure parentElement exists before attempting to access its clientHeight
    if (container.parentElement) {
      const parentHeight = container.parentElement.clientHeight;
      const snappedHeight = Math.floor(parentHeight / increment) * increment;
      container.style.height = `${snappedHeight + 1}px`;
    } else {
      console.warn('Parent element for #website-container not found for height calculation.');
    }
  }

  // Set initial dimensions
  setContainerDimensions();

  // Recalculate on window resize
  window.addEventListener('resize', setContainerDimensions);
});
