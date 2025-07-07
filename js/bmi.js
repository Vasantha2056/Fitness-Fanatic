function calculateBMI() {
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const resultDiv = document.getElementById("bmiResult");

  if (!height || !weight || height <= 0 || weight <= 0) {
    resultDiv.textContent = "❌ Please enter valid height and weight!";
    resultDiv.style.color = "red";
    return;
  }

  const bmi = (weight / ((height / 100) ** 2)).toFixed(2);

  let category = "";
  if (bmi < 18.5) category = "Underweight 😕";
  else if (bmi < 24.9) category = "Normal weight 😃";
  else if (bmi < 29.9) category = "Overweight 😬";
  else category = "Obese 😟";

  resultDiv.innerHTML = `Your BMI is <strong>${bmi}</strong> — ${category}`;
  resultDiv.style.color = "#0077cc";
}
