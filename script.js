document.addEventListener("DOMContentLoaded", () => {
  const emailLink = document.getElementById("email-link");
  const popup = document.getElementById("email-popup");
  const copyBtn = document.getElementById("copy-btn");
  const emailText = document.getElementById("email-text");

  // Show popup on hover
  emailLink.addEventListener("mouseenter", () => {
    popup.classList.remove("hidden");
    popup.classList.add("visible");

    const rect = emailLink.getBoundingClientRect();
    popup.style.left = `${rect.left + rect.width / 2}px`;
    popup.style.top = `${rect.top + window.scrollY - 10}px`;
  });

  // Hide popup when leaving the button area
  emailLink.addEventListener("mouseleave", () => {
    setTimeout(() => {
      popup.classList.remove("visible");
      popup.classList.add("hidden");
    }, 300);
  });

  // Hide popup if mouse leaves popup itself
  popup.addEventListener("mouseleave", () => {
    popup.classList.remove("visible");
    popup.classList.add("hidden");
  });

  // Copy email to clipboard
  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(emailText.textContent).then(() => {
      copyBtn.textContent = "Copied!";
      setTimeout(() => (copyBtn.textContent = "Copy"), 1500);
    });
  });
});
