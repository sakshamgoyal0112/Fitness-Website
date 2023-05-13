// Function to calculate BMI
function calculateBMI() {
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);
  
    // Calculate BMI
    var bmi = weight / (height * height);
  
    // Display the result
    document.getElementById("result").innerHTML = "Your BMI is: " + bmi.toFixed(2);
  }
  
  // Function to validate the contact form
  function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    // Simple validation
    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields");
      return false;
    }
  
    // More complex email validation using regular expression
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Invalid email address");
      return false;
    }
  
    // If all validations pass, submit the form
    alert("Form submitted successfully!");
    return true;
  }
  
  // Function to display the current date
  function displayDate() {
    var date = new Date();
    document.getElementById("currentDate").innerHTML = "Today's date is: " + date.toDateString();
  }
  
  // Function to toggle navigation menu
  function toggleMenu() {
    var navMenu = document.getElementById("nav-menu");
    navMenu.classList.toggle("active");
  }
  
  // Function to display workout routine
  function displayWorkoutRoutine(day) {
    var workoutDivs = document.getElementsByClassName("workout-routine");
  
    // Hide all workout routine divs
    for (var i = 0; i < workoutDivs.length; i++) {
      workoutDivs[i].style.display = "none";
    }
  
    // Display the selected day's workout routine
    var selectedDiv = document.getElementById(day);
    if (selectedDiv) {
      selectedDiv.style.display = "block";
    }
  }
  
  // Function to display exercise details
  function displayExerciseDetails(exercise) {
    var exerciseDetailsDiv = document.getElementById("exercise-details");
  
    // Fetch exercise details from the server using AJAX
    // and display the result in the exercise details div
  
    // Simulating AJAX request with a delay
    setTimeout(function() {
      var exerciseName = exercise;
      var details = "Exercise: " + exerciseName + "<br>";
      details += "Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  
      exerciseDetailsDiv.innerHTML = details;
    }, 1000);
  }
  
  // Function to initialize the fitness app
  function initializeApp() {
    // Add event listeners
    document.getElementById("calculate-bmi-btn").addEventListener("click", calculateBMI);
    document.getElementById("contact-form").addEventListener("submit", validateForm);
    document.getElementById("toggle-menu-btn").addEventListener("click", toggleMenu);
  
    // Display the current date
    displayDate();
  
    // Display the default workout routine
    displayWorkoutRoutine("monday");
  }
  
  // Initialize the app when the DOM is ready
  document.addEventListener("DOMContentLoaded", initializeApp);
  