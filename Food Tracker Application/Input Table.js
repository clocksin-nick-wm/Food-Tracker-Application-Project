$(document).ready(function(){
    $(submit).click(function(){
        var foodItem = document.getElementById('foodItem').value;
        var aDate = $('#aDate')[0].value;
        var eDate = $('#eDate')[0].value;
        var weight = $('#Weight')[0].value;
        var servingSize = $('#description')[0].value;
        var day = $('#day')[0].value;
        var consumed = $('#consumed')[0].value;
        var submit = $("#submit");
        /* when the submit button for the first variable is clicked the variables that are contained in the ids will be transferred
         to a table row that will be created in trackerTable*/
        $("#trackerTable").append("<tr><td>" + day + "</td><td>" + foodItem + "</td><td>" + aDate + "</td><td>" + eDate + "</td><td>" + weight + "</td>" +
            "<td>" + servingSize + "</td><td>" + consumed + "</td></tr>");
    });
    // when submit is clicked the table rows will move down
    $(submit).click(function(){
      $("#health").animate({
          'marginTop' : "+=23px"  //moves down
        })
    });
    $(submit).click(function(){
        $("#calories").animate({
            'marginTop' : "+=23px"  //moves down
        })
    });
    $(submit).click(function(){
        $("#caloriesTable").animate({
            'marginTop' : "+=23px"  //moves down
        });
    });
});