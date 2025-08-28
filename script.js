// Typing animation with constant blinking cursor
const textElement = document.getElementById('text-to-type');
const words = ["Software Developer", "Cloud Architect", "Programmer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;
let pauseAfterTyping = 1000;
let pauseAfterDeleting = 500;

function type() {
    const currentWord = words[wordIndex];
    if (!isDeleting) {
        textElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(type, pauseAfterTyping);
            return;
        }
    } else {
        textElement.textContent = currentWord.substring(0, charIndex);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, pauseAfterDeleting);
            return;
        }
    }
    setTimeout(type, typingSpeed);
}

// Scroll active link highlight
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});

// Start typing effect when page loads
window.onload = () => {
    type();
};
