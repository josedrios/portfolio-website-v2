'use client';

import { useEffect } from 'react';

export default function ResizeHandler() {
  useEffect(() => {
    const increment = 20;

    function setContainerDimensions() {
      const container = document.getElementById('website-container');
      if (!container) {
        console.warn('#website-container not found. Snapping script aborted.');
        return;
      }

      // WIDTH SET UP
      container.style.width = 'auto';

      if (container.parentElement) {
        const parentWidth = container.parentElement.clientWidth - 40;
        const snappedWidth = Math.floor(parentWidth / increment) * increment;
        container.style.width = `${snappedWidth}px`;
      } else {
        console.warn(
          'Parent element for #website-container not found for width calculation.'
        );
      }

      // HEIGHT SET UP
      if (container.parentElement) {
        container.style.height = 'auto';

        const naturalContentHeight = container.clientHeight;
        const parentHeight = container.parentElement.clientHeight - 40;

        let snappedNaturalHeight = 0;
        if (naturalContentHeight > 0) {
          snappedNaturalHeight = Math.floor(naturalContentHeight / increment) * increment;
        }

        let snappedParentHeight = 0;
        if (parentHeight > 0) {
          snappedParentHeight = Math.floor(parentHeight / increment) * increment;
        }

        if (snappedParentHeight === 0 && parentHeight > 0) {
          snappedParentHeight = increment;
        }
        if (snappedNaturalHeight === 0 && naturalContentHeight > 0) {
          snappedNaturalHeight = increment;
        }

        const finalSnappedHeight = Math.max(snappedNaturalHeight, snappedParentHeight);
        container.style.height = `${finalSnappedHeight}px`;
      } else {
        console.warn(
          'Parent element for #website-container not found for height calculation.'
        );
        container.style.height = `${increment}px`;
      }
    }

    // Initial call
    setContainerDimensions();

    // Resize listener
    window.addEventListener('resize', setContainerDimensions);

    // MutationObserver to watch for page changes
    const observer = new MutationObserver(() => {
      if (
        document.getElementById('design-page') ||
        document.getElementById('home-page') ||
        document.getElementById('projects-page') ||
        document.getElementById('blog-page') ||
        document.getElementById('not-found-page') 

      ) {
        setContainerDimensions();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', setContainerDimensions);
      observer.disconnect();
    };
  }, []);

  return null; // This component doesn't render anything visible
}
