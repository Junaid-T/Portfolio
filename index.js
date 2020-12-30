// NAV BAR

const scroll = function (section) {
  section.scrollIntoView({
    behavior: "smooth",
    block: "nearest",
    inline: "start",
  });
};

const aboutMeBtn = document.querySelector(".nav-link-1");
const aboutMeSection = document.querySelector(".about-me-container");

aboutMeBtn.addEventListener("click", function () {
  scroll(aboutMeSection);
});

const projectsBtn = document.querySelector(".nav-link-2");
const projectsSection = document.querySelector(".projects-container");

projectsBtn.addEventListener("click", function () {
  scroll(projectsSection);
});

const contactBtn = document.querySelector(".nav-link-3");
const contactSection = document.querySelector(".contact-container");

contactBtn.addEventListener("click", function () {
  scroll(contactSection);
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
