// 1. Validate Contact Form
// Checks if the provided email is valid (contains "@" and ".")
// and if the message is longer than 10 characters.
function validateContactForm(email, message) {
  return email.includes("@") && email.includes(".") && message.trim().length > 10;
}

// 2. Random Project Picker
// Returns a random project from a predefined list.
const projects = ["Portfolio Site", "Blog Platform", "E-commerce App"];
function getRandomProject() {
  const index = Math.floor(Math.random() * projects.length);
  return projects[index];
}

// 3. Calculate Project Cost
// Takes an array of project prices and returns the total cost.
function calculateProjectCost(prices) {
  return prices.reduce((total, price) => total + price, 0);
}

// 4. Feedback Storage
// Stores feedback messages in an array and returns the updated array.
let feedbackMessages = [];
function addFeedback(message) {
  feedbackMessages.push(message);
  return feedbackMessages;
}

// 5. Dark/Light Mode Toggle
// Toggles the dark-theme class on the body element.
function toggleDarkMode() {
  document.body.classList.toggle("dark-theme");
  console.log("Dark mode toggled!");
}
