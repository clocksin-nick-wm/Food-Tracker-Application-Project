$(document).ready(function(){
    $(submit).click(function(){
        var foodItem = document.getElementById('foodItem').value;
        var aDate = $('#aDate')[0].value;
        var eDate = $('#eDate')[0].value;
        var weight = $('#Weight')[0].value;
        var description = $('#description')[0].value;
        var day = $('#day')[0].value;
        var submit = $("#submit");
        $("#trackerTable").append("<tr><td>" + day + "</td><td>" + foodItem + "</td><td>" + aDate + "</td><td>" + eDate + "</td><td>" + weight + "</td>" +
            "<td>" + description + "</td></tr>");
    });
    $(submit).click(function(){
      $("#health").animate({
          'marginTop' : "+=23px"  //moves down
        })
    });
});

$