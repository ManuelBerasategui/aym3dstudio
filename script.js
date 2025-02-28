window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar-container");
    if (window.scrollY > 50) {
      navbar.classList.add("scroll");
    } else {
      navbar.classList.remove("scroll");
    }
  });
    