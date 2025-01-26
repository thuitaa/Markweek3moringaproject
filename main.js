document.getElementById("akan-name").addEventListener("submit", function (event) {
    // Prevent the form from refreshing the page
    event.preventDefault();

// To obtain the user input
    const fullName = document.getElementById("name").value.trim();
    const birthDate = document.getElementById("date-of-birth").value;
    const gender = document.querySelector('input[name ="gender"]:checked')?.id

    if (!birthDate || !gender || !fullName) {
        alert("Please fill in all the spaces before submitting")
        return;
    }
// to obtain the day of the week
    const date = new date(birthDate);
    const dayOfWeek = date.getDay(); // Sunday = 0, Monday = 1, ...