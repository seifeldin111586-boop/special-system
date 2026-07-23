document.addEventListener("DOMContentLoaded", () => {
  console.log("LearnDev App initialized.");

  // --- 1. Course Slider Functionality ---
  const cards = document.querySelectorAll(".course-card");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  if (cards.length > 0) {
    let currentIndex = 0;

    const showCard = (index) => {
      cards.forEach((card, i) => {
        card.classList.toggle("active", i === index);
      });
      const currentTitle = cards[index].querySelector("h3").innerText;
      console.log(`[Slider Navigation] Currently displaying course: "${currentTitle}"`);
    };

    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % cards.length;
      showCard(currentIndex);
    });

    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + cards.length) % cards.length;
      showCard(currentIndex);
    });
  }

  // --- 2. Sign Up Form Handling ---
  const signupForm = document.getElementById("signupForm");

  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const username = document.getElementById("username").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      // Output values to console
      console.log("=== New User Sign-Up Submission ===");
      console.log(`Full Name: ${username}`);
      console.log(`Email:     ${email}`);
      console.log(`Password:  ${"*".repeat(password.length)}`);
      console.log("===================================");

      alert("Sign up successful! Check the console log for details.");
      signupForm.reset();
    });
  }
});