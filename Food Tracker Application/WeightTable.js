 var weightSubmit = $("#weightSubmit");
    $(weightSubmit).click(function () {
        var weightDay = document.getElementById('wDay').value;
<<<<<<< HEAD
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
=======
        var weightInput = document.getElementById('wInput').value;
       $("#weightTable").append("<tr><td>" + weightDay + "</td><td>" + weightInput + "</td></tr>");
    });
    localStorage.setItem('#wDay');
    var wDay = localStorage.getItem('#wDay');
>>>>>>> 07daa27579de623e23ebf3393481ed5082bb7a66
