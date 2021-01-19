const scroll = function (section) {
  section.scrollIntoView({
    behavior: "smooth",
    block: "nearest",
    inline: "start",
  });
};

const chevron = document.querySelector(".chevron-container");
const aboutMeSection = document.querySelector(".about-me-container");

chevron.addEventListener("click", function () {
  scroll(aboutMeSection);
});
/////////////////////////////////////////////////////////////////////////////////////////////////////

// Modal and popup

const modal = document.getElementById("modal");
const projectCards = document.querySelectorAll(".project-card");
const project = document.getElementById("project-content");
const live = document.getElementById("live");
const code = document.getElementById("code");

const closeModal = () => {
  modal.style.display = "none";
  project.style.opacity = "1";
  project.style.bottom = "100%";
  project.querySelector("img").src = "";
};

const openModal = () => {
  modal.style.display = "block";
};

const showProject = (e) => {
  live.style.visibility = "visible";
  const id =
    e.target.parentElement.id || e.target.parentElement.parentElement.id;
  openModal();
  project.style.bottom = "15%";
  project.style.opacity = "1";
  switch (id) {
    case "project-card-1":
      showProject1();
      break;
    case "project-card-2":
      showProject2();

      break;
    case "project-card-3":
      showProject3();

      break;
    case "project-card-4":
      showProject4();

      break;
  }
};

const showProject1 = () => {
  project.querySelector("h4").innerHTML = "Automate Spotify";
  project.querySelector("img").src = "/Assets/Automate_Spotify.gif";
  code.href = "https://github.com/Junaid-T/Automate-Spotify";
  live.style.visibility = "hidden";
};
const showProject2 = () => {
  project.querySelector("h4").innerHTML = "Chat App";
  project.querySelector("img").src = "/Assets/Chat.gif";
  code.href = "https://github.com/Junaid-T/Chat-App";
  live = "https://infinite-reef-13583.herokuapp.com/";
};
const showProject3 = () => {
  project.querySelector("h4").innerHTML = "E-Commerce Site";
  project.querySelector("img").src = "/Assets/ECommerce.gif";
  code.href = "https://github.com/Junaid-T/E-Commerce";
  live = "https://yellow-e-commerce.herokuapp.com/";
};
const showProject4 = () => {
  project.querySelector("h4").innerHTML = "Football App";
  project.querySelector("img").src = "/Assets/Football.gif";
  code.href = "https://github.com/Junaid-T/Football-App";
  live.href = "https://hopeful-cray-8d487a.netlify.app/";
};

projectCards.forEach((project) => {
  project.addEventListener("click", (e) => showProject(e));
});

modal.addEventListener("click", closeModal);

const contactName = document.getElementById("contact-name");
const contactNumber = document.getElementById("contact-number");
const contactMessage = document.getElementById("contact-message");
const submit = document.querySelector(".submit");

submit.addEventListener("click", async (e) => {
  e.preventDefault();

  if (!contactName.value || !contactNumber.value || !contactMessage.value) {
    return alert("Please fill in your details and I'll get back to you");
  }

  try {
    const res = await axios.post("http://localhost:4000/email", {
      user: {
        name: contactName.value,
        number: contactNumber.value,
        message: contactMessage.value,
      },
    });

    if (res.status === 200) {
      const form = document.querySelector(".contact-form");
      form.innerHTML =
        "<h1 class=success-message>Thanks, I'll be in touch</h1><p class=success-message>Junaidtahir@hotmail.co.uk | 07949216871</p>";
      form.classList = "contact-form-success";
      document.querySelector(".contact-container").style.height = "40vh";
    } else {
      throw new Error();
    }
  } catch (err) {
    alert("Unexpected error, please try sending it again or drop me an email");
  }
});
