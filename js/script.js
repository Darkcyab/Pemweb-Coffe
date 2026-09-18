// =========================================================================
// EMBER COFFEE HOUSE - MAIN INTERACTION SCRIPT
// =========================================================================

document.addEventListener("DOMContentLoaded", () => {
  // 1. Mobile Navigation Toggle
  const navToggle = document.getElementById("navToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  if (navToggle && mobileMenu) {
    navToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("open");
      const isOpen = mobileMenu.classList.contains("open");
      navToggle.setAttribute("aria-expanded", isOpen);
      navToggle.innerHTML = isOpen ? "✕" : "☰";
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!navToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.innerHTML = "☰";
      }
    });
  }

  // 2. Sticky Navbar Styling on Scroll
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        navbar.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.4)";
        navbar.style.padding = "0.75rem 0";
      } else {
        navbar.style.boxShadow = "none";
        navbar.style.padding = "1rem 0";
      }
    });
  }

  // 3. Contact Form Submission (Client-Side MVP)
  const contactForm = document.getElementById("contactForm");
  const formSuccess = document.getElementById("formSuccess");

  if (contactForm && formSuccess) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name")?.value;
      const email = document.getElementById("email")?.value;
      const message = document.getElementById("message")?.value;

      if (!name || !email || !message) {
        alert("Mohon lengkapi semua kolom wajib (*)");
        return;
      }

      // Hide form & show success feedback
      contactForm.style.display = "none";
      formSuccess.style.display = "block";
    });
  }

  // 4. Reset Contact Form button
  const resetFormBtn = document.getElementById("resetFormBtn");
  if (resetFormBtn && contactForm && formSuccess) {
    resetFormBtn.addEventListener("click", () => {
      contactForm.reset();
      contactForm.style.display = "block";
      formSuccess.style.display = "none";
    });
  }
});
