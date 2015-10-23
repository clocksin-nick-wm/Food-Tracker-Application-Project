var foodItem = $("#foodItem").value;
var aDate = $("#aDate").value;
var eDate = $("#eDate").value;
var color = $("#Color").value;
var weight = $("#Weight").value;
var fruit = $("#fruit").value;
var vegetable = $("#vegetable").value;
var meat = $("#meat").value;
var fish = $("#fish").value;
var submit = $("#submit");


$(document).ready(function(){
    $(submit).click(function(){
        $("#trackerTable").append("<tr><td>" + foodItem + "</td><td>" + aDate + "</td><td>" + eDate + "</td><td>" + color + "</td><td>" + weight + "</td>" +
            "<td>" + fruit + vegetable + meat + fish + "</td></tr>");
    });
});
