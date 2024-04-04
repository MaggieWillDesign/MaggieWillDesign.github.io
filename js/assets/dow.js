
// Get the current date
    var currentDate = new Date();

    // Array to map days of the week
    var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // Get the current day of the week (0-6)
    var currentDayIndex = currentDate.getDay();

    // Get the day name using the current day index
    var currentDayName = daysOfWeek[currentDayIndex];

    // Display the greeting message
    document.getElementById("greeting").textContent = "Happy " + currentDayName + "!";
