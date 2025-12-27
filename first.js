const aboutSection = document.querySelector(".about-section");

window.addEventListener("scroll", () => {
    const sectionTop = aboutSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionTop < screenHeight - 100) {
        aboutSection.classList.add("show");
    }
});
