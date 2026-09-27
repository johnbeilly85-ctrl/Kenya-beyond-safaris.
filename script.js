// ===============================
// KENYA BEYOND TRAVEL & TOURS
// Main Website JavaScript
// ===============================


// ===============================
// CURRENT YEAR
// ===============================

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


// ===============================
// MOBILE NAVIGATION
// ===============================

const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

if (menuToggle && navigation) {

  menuToggle.addEventListener("click", () => {
    navigation.classList.toggle("open");

    const isOpen = navigation.classList.contains("open");

    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation"
    );
  });


  // Close the mobile menu after
  // selecting a navigation link

  const navigationLinks = navigation.querySelectorAll("a");

  navigationLinks.forEach((link) => {

    link.addEventListener("click", () => {
      navigation.classList.remove("open");

      menuToggle.setAttribute(
        "aria-label",
        "Open navigation"
      );
    });

  });

}


// ===============================
// TOUR ENQUIRY
// ===============================

// If a visitor clicks a tour enquiry link,
// the selected tour is stored temporarily
// so the contact page can use it.

const urlParams = new URLSearchParams(window.location.search);
const selectedTour = urlParams.get("tour");

if (selectedTour) {

  sessionStorage.setItem(
    "selectedTour",
    selectedTour
  );

}


// ===============================
// CONTACT FORM TOUR FIELD
// ===============================

// This will automatically fill a tour field
// when the contact page contains one.

const tourField = document.getElementById("tour");

if (tourField) {

  const savedTour =
    sessionStorage.getItem("selectedTour");

  if (savedTour) {
    tourField.value = savedTour;
  }

}


// ===============================
// REMOVE STORED TOUR AFTER USE
// ===============================

// Once the visitor has reached the contact page,
// keep the selected tour available for the form,
// but it can be cleared when the form is submitted.

const contactForm =
  document.getElementById("contactForm");

if (contactForm) {

  contactForm.addEventListener("submit", () => {

    sessionStorage.removeItem(
      "selectedTour"
    );

  });

}
