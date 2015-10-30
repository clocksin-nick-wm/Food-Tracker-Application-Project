$(document).ready(function(){
    $(submit).click(function(){
        var foodItem = document.getElementById('foodItem').value;
        var aDate = $('#aDate')[0].value;
        var eDate = $('#eDate')[0].value;
        var weight = $('#Weight')[0].value;
        var fruit = $('#fruit')[0].value;
        var vegetable = $('#vegetable')[0].value;
        var meat = $('#meat')[0].value;
        var fish = $("#fish")[0].value;
        var submit = $("#submit");
        $("#trackerTable").append("<tr><td>" + foodItem + "</td><td>" + aDate + "</td><td>" + eDate + "</td><td>" + weight + "</td>" +
            "<td>" + fruit + vegetable + meat + fish + "</td></tr>");
    });
});
