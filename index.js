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

// Modal and popup

const modal = document.getElementById("modal");
const project1Card = document.getElementById("project-card-1");
const project2Card = document.getElementById("project-card-2");
const project3Card = document.getElementById("project-card-3");
const projectCards = document.querySelectorAll(".project-card");

const project1 = document.getElementById("project-1-content");
const project2 = document.getElementById("project-2-content");
const project3 = document.getElementById("project-3-content");
const projects = document.querySelectorAll(".project-content");

const closeModal = () => {
  modal.style.display = "none";
  projects.forEach((project) => {
    project.style.display = "none";
  });
};

const openModal = () => {
  modal.style.display = "block";
};

const showProject = (e) => {
  openModal();
  switch (e.target.id) {
    case "project-card-1":
      project1.style.display = "block";
      break;
    case "project-card-2":
      project2.style.display = "block";
      break;
    case "project-card-3":
      project3.style.display = "block";
      break;
  }
};

projectCards.forEach((project) => {
  project.addEventListener("click", (e) => showProject(e));
});

modal.addEventListener("click", closeModal);
