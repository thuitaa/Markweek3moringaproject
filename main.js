document.getElementById("akan-name").addEventListener("submit", function (event) {
    // Prevent the form from refreshing the page
    event.preventDefault();

// To obtain the user input
    const fullName = document.getElementById("name").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked')?.id;
    const birthDate = document.getElementById("date-of-birth").value;

    if (!fullName || !gender || !birthDate) {
        alert("Please fill out all fields before submitting.");
        return;
    }
// to obtain the day of the week
    const date = new Date(birthDate);
    const year = date.getFullYear();
    const month = date.getMonth() +1; 
    const day = date.getDate();

// To obtain CC(century) and YY(last 2 digits)
    const CC = Math.floor(year / 100); 
    const YY = year % 100; // Year within the century

// Applying formula
    const dayWhenBorn = Math.floor (
        (((4 * CC) - (2 * CC) - 1) + ((5 * YY) / 4) + ((26 * (month + 1)) / 10) + day) % 7
    );

    // To avoid negative values
    const finalDay = (dayWhenBorn + 7) % 7


    // linking the Akan name to the day of the week
    const akanNames = {
    male: ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"],
    female: ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
    }

    const akanName = akanNames[finalDay][gender];



 // Displaying the result
    alert(`Hey ${fullName}! Based on your birthday, your Akan name is ${akanName}!`);

});
