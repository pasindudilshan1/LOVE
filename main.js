onload = () => {
  // Remove the 'not-loaded' class after a delay
  const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
  }, 1000);

  // Navigate to 'index.html' when the button is clicked
  const moveVaseButton = document.getElementById("move-vase");
  moveVaseButton.addEventListener("click", () => {
      window.location.href = "END.html";
  });
};
