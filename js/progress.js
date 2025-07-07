// Count how many "done" workouts in localStorage
const keys = Object.keys(localStorage);
let doneCount = 0;

keys.forEach(key => {
  if (key.startsWith("workout_") && localStorage.getItem(key) === "done") {
    doneCount++;
  }
});

const completedText = document.getElementById("completedWorkouts");
completedText.textContent = `✅ You've completed ${doneCount} workout section(s)! Keep going!`;

// Sample chart using Chart.js
const ctx = document.getElementById("progressChart").getContext("2d");
const chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Warm-Up', 'Strength', 'Cardio'],
    datasets: [{
      label: 'Workout Completion',
      data: [
        localStorage.getItem("workout_Warm-Up") === "done" ? 1 : 0,
        localStorage.getItem("workout_Strength Training") === "done" ? 1 : 0,
        localStorage.getItem("workout_Cardio Blast") === "done" ? 1 : 0,
      ],
      backgroundColor: ['#28a745', '#007bff', '#ff6347']
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: 1,
        ticks: {
          stepSize: 1
        }
      }
    }
  }
});
// Show toast with progress
setTimeout(() => {
  const toast = document.getElementById("progressToast");
  toast.textContent = `🎉 You've completed ${doneCount} out of 3 workouts today!`;
  toast.classList.remove("hidden");
  toast.classList.add("show");

  // Hide after 5 seconds
  setTimeout(() => {
    toast.classList.remove("show");
  }, 5000);
}, 500);
