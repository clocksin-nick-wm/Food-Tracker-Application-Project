$(document).ready( function(){
    var submitCalories = $("#submit2");
    $(submitCalories).click(function(){
        var dayCalories = document.getElementById('days').value;
        var calorie = document.getElementById('calorie').value;
        $("#calorieTracker").append("<tr><td>" + dayCalories + " </td><td>" + calorie + "</td></tr>");
    });
});