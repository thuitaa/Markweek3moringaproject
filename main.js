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

    // linking the Akan name to the day of the week
    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    let akanName;
    if (gender === "male");{
        akanName = maleNames[dayOfWeek];
    }
    elseif (gender === "female"); {
        akanName = femaleNames[dayOfWeek];
    }

 // Displaying the result
    alert(`Hey ${fullName}! Based on your birthday, your Akan name is ${akanName}!`)

});
