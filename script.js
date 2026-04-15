// Improved scroll offset calculation and accessibility support
function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        const rect = element.getBoundingClientRect();
        const offset = rect.top + window.scrollY;
        window.scrollTo({
            top: offset,
            behavior: 'smooth'
        });
        element.setAttribute('tabindex', '-1'); // Make the element focusable
        element.focus(); // Focus on the element after scrolling
    }
}