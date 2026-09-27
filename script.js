// ==========================================
// KENYA BEYOND TRAVEL & TOURS
// Main Website JavaScript
// ==========================================

// ==========================================
// CURRENT YEAR
// ==========================================

const yearElement = document.getElementById("year");

if (yearElement) {
yearElement.textContent = new Date().getFullYear();
}

// ==========================================
// MOBILE NAVIGATION
// ==========================================

const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

if (menuToggle && navigation) {

menuToggle.addEventListener("click", () => {

navigation.classList.toggle("open");

const isOpen =
  navigation.classList.contains("open");

menuToggle.setAttribute(
  "aria-label",
  isOpen
    ? "Close navigation"
    : "Open navigation"
);

});

const navigationLinks =
navigation.querySelectorAll("a");

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

// ==========================================
// SELECTED TOUR
// ==========================================

// When a visitor clicks "Enquire Now" or
// "Enquire about this trip", the tour name
// is temporarily saved.

const urlParams =
new URLSearchParams(window.location.search);

const selectedTour =
urlParams.get("tour");

if (selectedTour) {

sessionStorage.setItem(
"selectedTour",
selectedTour
);

}

// ==========================================
// CONTACT FORM TOUR FIELD
// ==========================================

const tourField =
document.getElementById("tour");

if (tourField) {

const savedTour =
sessionStorage.getItem("selectedTour");

if (savedTour) {

const matchingOption =
  Array.from(tourField.options).find(
    (option) =>
      option.value === savedTour
  );

if (matchingOption) {
  tourField.value = savedTour;
}

}

}

// ==========================================
// CONTACT FORM
// ==========================================

const contactForm =
document.getElementById("contactForm");

const formMessage =
document.getElementById("formMessage");

if (contactForm) {

contactForm.addEventListener(
"submit",
function (event) {

  event.preventDefault();

  const name =
    document.getElementById("name")?.value.trim();

  const email =
    document.getElementById("email")?.value.trim();

  const phone =
    document.getElementById("phone")?.value.trim();

  const tour =
    document.getElementById("tour")?.value;

  const travelDate =
    document.getElementById("travelDate")?.value;

  const travellers =
    document.getElementById("travellers")?.value;

  const message =
    document.getElementById("message")?.value.trim();


  if (!name || !email || !message) {

    if (formMessage) {

      formMessage.style.display = "block";

      formMessage.textContent =
        "Please complete your name, email and trip details.";

    }

    return;

  }


  // ====================================
  // CREATE WHATSAPP MESSAGE
  // ====================================

  let whatsappMessage =
    "Hello Kenya Beyond Travel & Tours,%0A%0A";

  whatsappMessage +=
    "I would like to make a travel enquiry.%0A%0A";

  whatsappMessage +=
    "Name: " +
    encodeURIComponent(name) +
    "%0A";

  whatsappMessage +=
    "Email: " +
    encodeURIComponent(email) +
    "%0A";

  if (phone) {

    whatsappMessage +=
      "Phone / WhatsApp: " +
      encodeURIComponent(phone) +
      "%0A";

  }

  if (tour) {

    whatsappMessage +=
      "Trip / Experience: " +
      encodeURIComponent(tour) +
      "%0A";

  }

  if (travelDate) {

    whatsappMessage +=
      "Preferred Travel Date: " +
      encodeURIComponent(travelDate) +
      "%0A";

  }

  if (travellers) {

    whatsappMessage +=
      "Travellers: " +
      encodeURIComponent(travellers) +
      "%0A";

  }

  whatsappMessage +=
    "%0ATrip Details:%0A" +
    encodeURIComponent(message);


  // ====================================
  // OPEN WHATSAPP
  // ====================================

  const whatsappURL =
    "https://wa.me/254729029717?text=" +
    whatsappMessage;


  if (formMessage) {

    formMessage.style.display = "block";

    formMessage.textContent =
      "Your enquiry is ready. Opening WhatsApp...";

  }


  window.open(
    whatsappURL,
    "_blank",
    "noopener"
  );


  // Remove saved tour after the
  // enquiry has been prepared.

  sessionStorage.removeItem(
    "selectedTour"
  );

}

);

}

// ==========================================
// CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
// ==========================================

document.addEventListener("click", (event) => {

if (
!navigation ||
!menuToggle
) {
return;
}

const clickedInsideNavigation =
navigation.contains(event.target);

const clickedMenuButton =
menuToggle.contains(event.target);

if (
!clickedInsideNavigation &&
!clickedMenuButton
) {

navigation.classList.remove("open");

menuToggle.setAttribute(
  "aria-label",
  "Open navigation"
);

}

});
