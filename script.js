document.addEventListener("DOMContentLoaded", () => {
  const promptElement = document.getElementById("builder-prompt");
  const copyPromptButton = document.querySelector('[data-action="copy-prompt"]');

  if (copyPromptButton && promptElement) {
    copyPromptButton.addEventListener("click", () => {
      const text = promptElement.textContent || "";
      navigator.clipboard
        .writeText(text.trim())
        .catch(() => {
          // Fail silently; design system avoids noisy errors.
        });
    });
  }

  const proofItems = document.querySelectorAll("[data-proof-item]");

  proofItems.forEach((item) => {
    const checkbox = item.querySelector("[data-proof-checkbox]");
    const input = item.querySelector("[data-proof-input]");

    if (!checkbox || !input) return;

    const updateCheckboxState = () => {
      const hasProof = (input.value || "").trim().length > 0;
      if (!hasProof && checkbox.checked) {
        checkbox.checked = false;
      }
    };

    checkbox.addEventListener("change", () => {
      const hasProof = (input.value || "").trim().length > 0;
      if (!hasProof && checkbox.checked) {
        item.classList.add("proof-item--blocked");
        checkbox.checked = false;
      } else {
        item.classList.remove("proof-item--blocked");
      }
    });

    input.addEventListener("input", () => {
      item.classList.remove("proof-item--blocked");
      updateCheckboxState();
    });
  });
});

