document.addEventListener("DOMContentLoaded", () => {
  const water = localStorage.getItem("waterIntake");
  const hours = localStorage.getItem("workoutHours");
  const lastSaved = localStorage.getItem("hydrationDate");
  const today = new Date().toLocaleDateString();

  // Reset if it's a new day
  if (lastSaved !== today) {
    localStorage.removeItem("waterIntake");
    localStorage.removeItem("workoutHours");
    localStorage.setItem("hydrationDate", today);
  }

  if (water && hours) {
    displayHydrationMessage(water, hours);
    setTimeout(() => {
      renderHydrationChart(water, hours); // Delay ensures DOM is ready
    }, 100);
  }
});

function saveHydration() {
  const water = parseFloat(document.getElementById("waterInput").value);
  const hours = parseFloat(document.getElementById("hoursInput").value);

  if (!water || !hours || water <= 0 || hours <= 0) {
    alert("🚨 Please enter valid numbers for both fields.");
    return;
  }

  if (water < 1.5) {
    alert("⚠️ You should drink more water! Aim for at least 2 liters per day. 💧");
  }

  const today = new Date().toLocaleDateString();
  localStorage.setItem("hydrationDate", today);
  localStorage.setItem("waterIntake", water);
  localStorage.setItem("workoutHours", hours);

  displayHydrationMessage(water, hours);
  renderHydrationChart(water, hours);
  document.getElementById("viewProgressBtn").disabled = false;

}

function displayHydrationMessage(water, hours) {
  document.getElementById("hydrationResult").innerText =
    `💧 You drank ${water} liters and worked out for ${hours} hours today!`;
}

function renderHydrationChart(water, hours) {
  const canvas = document.getElementById("hydrationChart");
  if (!canvas) {
    console.error("Canvas element not found!");
    return;
  }

  const ctx = canvas.getContext("2d");

  if (window.hydrationChart) {
    window.hydrationChart.destroy();
  }

  window.hydrationChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Water Intake (L)", "Workout Hours"],
      datasets: [{
        label: "Today's Stats",
        data: [water, hours],
        backgroundColor: ["#00bcd4", "#4caf50"],
        borderRadius: 10
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        title: {
          display: true,
          text: "💧 Hydration & ⏱️ Workout Chart"
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 10
        }
      }
    }
  });
}
function goToProgress() {
  window.location.href = "progress.html";
}
// Workout + hydration logic
