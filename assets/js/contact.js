(() => {
  const button = document.querySelector("[data-copy-email]");
  const status = document.querySelector("[data-copy-status]");
  const emailLink = document.querySelector(".contact-email a");
  if (!button || !status || !emailLink) return;

  button.hidden = false;
  button.addEventListener("click", async () => {
    button.disabled = true;
    status.textContent = "Copying email address…";
    try {
      if (!navigator.clipboard || !navigator.clipboard.writeText) {
        throw new Error("Clipboard unavailable");
      }
      await navigator.clipboard.writeText(emailLink.textContent.trim());
      status.textContent = "Email address copied. Paste it into your email service.";
    } catch {
      status.textContent = "Unable to copy automatically. Select the email address above and copy it manually.";
    } finally {
      button.disabled = false;
    }
  });
})();
