function calculateCalories() {
    var intensity = document.getElementById("workout-type").value;
    var duration = parseInt(document.getElementById("workout-duration").value);
    var numExercises = parseInt(document.getElementById("num-exercises").value);
    var avgSets = parseInt(document.getElementById("avg-sets").value);
    var avgReps = parseInt(document.getElementById("avg-reps").value);

    if (intensity === "" || isNaN(duration) || duration <= 0 || isNaN(numExercises) || numExercises <= 0 || isNaN(avgSets) || avgSets <= 0 || isNaN(avgReps) || avgReps <= 0) {
        alert("Please fill in all fields with valid values.");
        return;
    }

    var caloriesPerMinute;

    switch (intensity) {
        case "low":
            caloriesPerMinute = 5;
            break;
        case "medium":
            caloriesPerMinute = 8;
            break;
        case "high":
            caloriesPerMinute = 10;
            break;
        default:
            break;
    }

    // Calculate total reps
    var totalReps = numExercises * avgSets * avgReps;

    // Assuming 1 rep burns 0.1 calories
    var caloriesBurned = totalReps * 0.1;

    // Adjust calories burned based on intensity and duration
    var totalCalories = caloriesBurned * duration * caloriesPerMinute;

    displayCalories(totalCalories);
}

function displayCalories(calories) {
    var resultDiv = document.querySelector(".result");
    var caloriesBurnedElement = document.querySelector(".calories-burned");

    caloriesBurnedElement.textContent = Math.round(calories) + " calories burned";
    resultDiv.style.display = "block";
}
