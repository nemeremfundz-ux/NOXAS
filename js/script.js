document.addEventListener("DOMContentLoaded", function () {
  console.log("NOXAS loaded successfully!");

  const buttons = document.querySelectorAll(".btn");

  buttons.forEach(button => {
    button.addEventListener("click", function () {
      alert("This feature is coming soon!");
    });
  });
});
