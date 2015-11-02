var weightSubmit = $("#weightSubmit");
    $(weightSubmit).click(function(){
        var weightDay = document.getElementById('wDay').value;
        var weightInput = document.getElementById('wInput').value;
       $("#weightTable").append("<tr><td>" + weightDay + "</td><td>" + weightInput + "</td></tr>");
    });