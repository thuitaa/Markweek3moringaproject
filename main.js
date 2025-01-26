document.getElementById("akan-name").addEventListener("submit", function (event) {
    // Prevent the form from refreshing the page
    event.preventDefault();

// To obtain the user input
    const fullName = document.getElementById("name").value.trim();
    const birthDate = document.getElementById("date-of-birth").value;
    const gender = document.querySelector('input[name ="gender"]:checked')?.id
