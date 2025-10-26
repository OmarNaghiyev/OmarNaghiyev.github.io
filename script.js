// Track clicks on email button to detect double-click
let emailClickCount = 0;
let emailClickTimer = null;

document.addEventListener('DOMContentLoaded', () => {
  const emailLink = document.querySelector('a[href^="mailto:"]');
  
  emailLink.addEventListener('click', (e) => {
    emailClickCount++;
    
    // If this is the second click within time window
    if (emailClickCount === 2) {
      e.preventDefault(); // Stop the mailto from opening
      copyEmailToClipboard();
      emailClickCount = 0; // Reset counter
      clearTimeout(emailClickTimer);
      return;
    }
    
    // Start/reset timer for click window (700ms feels natural)
    clearTimeout(emailClickTimer);
    emailClickTimer = setTimeout(() => {
      emailClickCount = 0; // Reset if too much time passed
    }, 700);
  });
});

function copyEmailToClipboard() {
  const email = 'me@omarnaghiyev.com';
  
  navigator.clipboard.writeText(email).then(() => {
    showNotification('Email copied to clipboard');
  }).catch(err => {
    console.error('Failed to copy email:', err);
  });
}

function showNotification(message) {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  // Trigger animation by adding 'show' class after brief delay
  setTimeout(() => notification.classList.add('show'), 10);
  
  // Remove notification after 1.5 seconds
  setTimeout(() => {
    notification.classList.remove('show');
    // Remove from DOM after fade animation completes
    setTimeout(() => notification.remove(), 300);
  }, 1500);
}

console.log("Portfolio page loaded — full version coming soon!");