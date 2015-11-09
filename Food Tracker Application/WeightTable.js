 var weightSubmit = $("#weightSubmit");
    $(weightSubmit).click(function () {
        var weightDay = document.getElementById('wDay').value;
        var weightInput = +document.getElementById('wInput').value;

        var lastRow = $('#weightTable tr:last');
        var difference = '';

        if (lastRow.length) {
            var previousWeight = $(lastRow).find('td')[1];

            previousWeight = +$(previousWeight).html();

            difference = previousWeight - weightInput;
        }

        $("#weightTable").append("<tr><td>" + weightDay + "</td><td>" + weightInput + "</td><td>" + difference + "</td></tr>");
    });