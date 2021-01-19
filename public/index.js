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
    const res = await axios.post("/email", {
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
      document.querySelector(".contact-container").style.height = "30vh";
    } else {
      throw new Error();
    }
  } catch (err) {
    alert("Unexpected error, please try sending it again or drop me an email");
  }
});
