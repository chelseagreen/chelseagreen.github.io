document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((navLink) => {
    navLink.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.dataset.target;
      showSection(targetId);
      setActiveLink(targetId);
    });
  });

  // Select the default section and set the active link
  const defaultSection = document.querySelector(".section.active");
  setActiveLink(defaultSection.id);

  function showSection(targetId) {
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
      if (section.id === targetId) {
        section.classList.add("active");
      } else {
        section.classList.remove("active");
      }
    });
  }

  function setActiveLink(activeSectionId) {
    navLinks.forEach((navLink) => {
      if (navLink.dataset.target === activeSectionId) {
        navLink.classList.add("active-link");
      } else {
        navLink.classList.remove("active-link");
      }
    });
  }

  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");

  navToggle.addEventListener("click", function () {
    navMenu.classList.toggle("show");
  });

  // Close the menu when a link is clicked
  navMenu.addEventListener("click", function (event) {
    if (event.target.tagName === "A") {
      navMenu.classList.remove("show");
    }
  });
});
