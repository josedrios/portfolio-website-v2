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
            // Reset container height to auto to get its natural height
            // (for comparison reasons that you will see later on)
            const originalHeightStyle = container.style.height; // Store for potential fallback
            container.style.height = 'auto';

            // Read the container's natural height based on its content after 'height: auto'
            const naturalContentHeight = container.clientHeight;

            // Get the parent's inner height
            const parentHeight = container.parentElement.clientHeight - 40;

            // Calculate the snapped heights for natural and parent
            let snappedNaturalHeight = 0;
            if (naturalContentHeight > 0) {
                snappedNaturalHeight =
                    Math.floor(naturalContentHeight / increment) * increment;
            }

            let snappedParentHeight = 0;
            if (parentHeight > 0) {
                snappedParentHeight = Math.floor(parentHeight / increment) * increment;
            }

            // Make sure snapped heights aren't too small
            if (snappedParentHeight === 0 && parentHeight > 0) {
                snappedParentHeight = increment;
            }
            if (snappedNaturalHeight === 0 && naturalContentHeight > 0) {
                snappedNaturalHeight = increment;
            }

            // Whichever height is taller, chose that one
            let finalSnappedHeight = Math.max(snappedNaturalHeight, snappedParentHeight);

            // Apply the chosen final snapped height
            container.style.height = `${finalSnappedHeight}px`;
        } else {
            console.warn(
                'Parent element for #website-container not found for height calculation.'
            );
            // Fallback height
            container.style.height = `${increment}px`;
        }
    }

    setContainerDimensions();

    // Recalculate on window resize
    window.addEventListener('resize', setContainerDimensions);

    const observer = new MutationObserver((mutationsList, observer) => {
        if (document.getElementById('design-page')) {
            setContainerDimensions();
        }
        if (document.getElementById('home-page')) {
            setContainerDimensions();
        }
        if (document.getElementById('projects-page')) {
            setContainerDimensions();
        }
        if (document.getElementById('blog-page')) {
            setContainerDimensions();
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });
});
