document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");
  if (loginBtn) {
    loginBtn.addEventListener("click", (e) => {
      e.preventDefault();  
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      if (email === "admin@gmail.com" && password === "admin") {
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "types-of-workouts.html";
      } else {
        alert("❌ Invalid credentials. Try admin@gmail.com / admin");
      }
    });
  }
});
