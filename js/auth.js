function flipCard() {
  document.getElementById("card").classList.toggle("flipped");
}

// Store dummy users in localStorage
function signup() {
  const email = document.getElementById("signupEmail").value;
  const pass = document.getElementById("signupPass").value;

  if (email && pass) {
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPass", pass);
    alert("Account created! Please log in.");
    flipCard();
  } else {
    alert("Please enter valid credentials.");
  }
}

function login() {
  const email = document.getElementById("loginEmail").value;
  const pass = document.getElementById("loginPass").value;

  const storedEmail = localStorage.getItem("userEmail");
  const storedPass = localStorage.getItem("userPass");

  if (email === storedEmail && pass === storedPass) {
    alert("Login successful!");
    window.location.href = "types-of-workouts.html";
  } else {
    alert("Invalid email or password.");
  }
}// Auth logic
