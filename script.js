document.addEventListener("DOMContentLoaded", () => {
  const emailLink = document.getElementById("email-link");
  const toast = document.getElementById("toast");
  const EMAIL = "me@omarnaghiyev.com";

  // Double-click to copy (prevent default mailto on dblclick only)
  emailLink.addEventListener("dblclick", (e) => {
    e.preventDefault();
    copyToClipboard(EMAIL).then(() => showToast());
  });

  function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }
    // Fallback
    return new Promise((resolve) => {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      resolve();
    });
  }

  let toastTimer;
  function showToast() {
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 1600);
  }
});
