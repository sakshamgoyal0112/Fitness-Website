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
  