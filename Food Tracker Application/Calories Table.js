var lastCalorie = 0;
var submitCalories = $("#button");
    $(submitCalories).click(function(){
        var dayCalories = document.getElementById('days').value;
        var calorie = document.getElementById('calorie').value;
        var lastCalorie = calorie +
        $("#calorieTracker").append("<tr><td>" + dayCalories + "</td><td>" + calorie + "</td><td>"+ lastCalorie + "</td></tr>");
        lastCalorie - calorie;
    });