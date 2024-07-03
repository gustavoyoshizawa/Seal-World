const sections = document.querySelectorAll(".js-scroll");
const windowMetade = window.innerHeight * 0.85;

sections[0].classList.add("ativo");

function animarScroll() {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const isSectionVisible = sectionTop - windowMetade < 0;
    if (isSectionVisible) {
      section.classList.add("ativo");
    }
  });
}

window.addEventListener("scroll", animarScroll);
