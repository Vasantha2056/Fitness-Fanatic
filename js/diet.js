const diets = {
  Monday: {
    weightLoss: ["Oats + Apple", "Quinoa Salad", "Soup + Veggies"],
    muscleGain: ["Eggs + Bread", "Rice + Chicken", "Paneer Wrap"],
    balanced: ["Idli + Sambar", "Dal + Roti", "Veg Curry + Rice"]
  },
  Tuesday: {
    weightLoss: ["Smoothie", "Brown Rice + Veggies", "Boiled Egg + Cucumber"],
    muscleGain: ["Omelette + Milk", "Grilled Fish + Rice", "Soy Curry + Roti"],
    balanced: ["Upma + Banana", "Chickpea Salad", "Dosa + Chutney"]
  },
  Wednesday: {
    weightLoss: ["Green Tea + Boiled Egg", "Soup + Crackers", "Fruit Bowl"],
    muscleGain: ["Paratha + Yogurt", "Chicken Wrap", "Egg Curry + Rice"],
    balanced: ["Poha", "Veg Pulao + Curd", "Paneer Sabzi + Roti"]
  },
  Thursday: {
    weightLoss: ["Oats + Almonds", "Grilled Veg Sandwich", "Low-fat Yogurt + Fruit"],
    muscleGain: ["Bread + Peanut Butter", "Rice + Egg Curry", "Milk + Dates"],
    balanced: ["Chilla", "Dal + Bhindi", "Chapati + Tofu"]
  },
  Friday: {
    weightLoss: ["Fruit Smoothie", "Boiled Chana", "Mixed Veg Soup"],
    muscleGain: ["Protein Shake", "Mutton Curry + Rice", "Oats + Nuts"],
    balanced: ["Idli + Coconut Chutney", "Sambar + Rice", "Chapati + Veggies"]
  },
  Saturday: {
    weightLoss: ["Detox Water + Fruit", "Moong Salad", "Pumpkin Soup"],
    muscleGain: ["Banana Shake", "Rice + Fish Curry", "Paneer Sandwich"],
    balanced: ["Aloo Paratha + Curd", "Rajma + Rice", "Upma + Buttermilk"]
  },
  Sunday: {
    weightLoss: ["Herbal Tea + Apple", "Boiled Veggies", "Clear Veg Soup"],
    muscleGain: ["Milk + Boiled Eggs", "Rice + Chicken Leg", "Omelette + Bread"],
    balanced: ["Dhokla", "Veg Fried Rice", "Khichdi + Curd"]
  }
};

function showDiet(day) {
  const data = diets[day];
  const container = document.getElementById("dietContainer");
  container.innerHTML = `
    <div class="diet-card">
      <h3>🍎 Weight Loss</h3>
      <ul>
        <li><strong>Breakfast:</strong> ${data.weightLoss[0]}</li>
        <li><strong>Lunch:</strong> ${data.weightLoss[1]}</li>
        <li><strong>Dinner:</strong> ${data.weightLoss[2]}</li>
      </ul>
    </div>
    <div class="diet-card">
      <h3>🥩 Muscle Gain</h3>
      <ul>
        <li><strong>Breakfast:</strong> ${data.muscleGain[0]}</li>
        <li><strong>Lunch:</strong> ${data.muscleGain[1]}</li>
        <li><strong>Dinner:</strong> ${data.muscleGain[2]}</li>
      </ul>
    </div>
    <div class="diet-card">
      <h3>🥗 Balanced Diet</h3>
      <ul>
        <li><strong>Breakfast:</strong> ${data.balanced[0]}</li>
        <li><strong>Lunch:</strong> ${data.balanced[1]}</li>
        <li><strong>Dinner:</strong> ${data.balanced[2]}</li>
      </ul>
    </div>
  `;
}

// Load Monday by default
document.addEventListener("DOMContentLoaded", () => {
  showDiet("Monday");
});

document.addEventListener('DOMContentLoaded', () => {
    const days = document.querySelectorAll('button');
    days.forEach(btn => {
        btn.addEventListener('click', () => {
            alert(`Showing diet for ${btn.textContent}`);
        });
    });
});

