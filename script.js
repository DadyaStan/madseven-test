document.addEventListener("DOMContentLoaded", () => {
    const blocks = document.querySelectorAll('.block');

    blocks.forEach(block => {
        const animationDelay = Math.random() * 1.5 + 's';
        block.style.animationDelay = animationDelay;
    });
});