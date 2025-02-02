
// taggal button
document.addEventListener("DOMContentLoaded", function () {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector("#navbarTogglerDemo02");
    const navbarLinks = document.querySelectorAll("#navbarTogglerDemo02 a"); // Select all navbar links

    // Toggle the navbar on button click
    navbarToggler.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevents the click event from bubbling up
        this.classList.toggle("active");
        navbarCollapse.classList.toggle("show");
    });

    // Close the navbar when clicking anywhere outside
    document.addEventListener("click", function (event) {
        const isClickInsideNavbar = navbarCollapse.contains(event.target);
        const isClickOnToggler = navbarToggler.contains(event.target);

        if (!isClickInsideNavbar && !isClickOnToggler) {
            navbarCollapse.classList.remove("show");
            navbarToggler.classList.remove("active");
        }
    });

    // Close the navbar when a link is clicked
    navbarLinks.forEach(link => {
        link.addEventListener("click", function () {
            navbarCollapse.classList.remove("show");
            navbarToggler.classList.remove("active");
        });
    });

    // Close the navbar when navigating to a new page
    window.addEventListener("pageshow", function () {
        navbarCollapse.classList.remove("show");
        navbarToggler.classList.remove("active");
    });
});
// dark and light mode
document.addEventListener("DOMContentLoaded", function () {
  const toggleSwitch = document.getElementById("checkbox");

  // Check if the theme is already set in local storage
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
      document.body.classList.add("dark-mode");
      toggleSwitch.checked = true; // Keep the toggle ON if dark mode was enabled
  }

  // Function to switch the theme
  toggleSwitch.addEventListener("change", function () {
      if (toggleSwitch.checked) {
          document.body.classList.add("dark-mode");
          localStorage.setItem("theme", "dark");
      } else {
          document.body.classList.remove("dark-mode");
          localStorage.setItem("theme", "light");
      }
  });
});


