const signUpBtn = document.getElementById("sign-up-btn");
const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("close-modal");

signUpBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const fullName = document.getElementById("full-name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  // For demo purposes, just show the modal
  modal.style.display = "block";
});

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
  setTimeout((t) => {
    location.replace("/login.html");
  }, 1000);
});
