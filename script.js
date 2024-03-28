const showLinks = (menu) => {
  const elem = document.querySelector(".navbar-nav");

  if (elem.style.display == "flex") {
    elem.style.display = "none";
  } else {
    elem.style.display = "flex";
  }
  menu.classList.toggle("open");
};
