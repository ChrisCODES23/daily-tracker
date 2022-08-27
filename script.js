
//  Time
var timeToday = moment()
$("#1a").text(timeToday.format("MMM Do YYYY, h:m:ss"));

$(document).ready(function () {
    var currentHour = moment().format("H")


    // ? A logical loop that examines whether the time is past present or future.
    for (i = 9; i < 18; i++) {
        var textAreaEl = $("#" + i).prev();
        if (parseInt(currentHour) == i) {
            textAreaEl.attr("class", "col-9 present")
        }
        else if (parseInt(currentHour) > i) {
            textAreaEl.attr("class", "col-9 past")
        }
        else if (parseInt(currentHour) < i) {
            textAreaEl.attr("class", "col-9 future")
        }
    }
    // ? Runs when user clicks the save button
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings("textarea").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(text, time);

    });


    $("#hour9 textarea").val(localStorage.getItem("hour9"));
    $("#hour10 textarea").val(localStorage.getItem("hour10"));
    $("#hour11 textarea").val(localStorage.getItem("hour11"));
    $("#hour12 textarea").val(localStorage.getItem("hour12"));
    $("#hour13 textarea").val(localStorage.getItem("hour13"));
    $("#hour14 textarea").val(localStorage.getItem("hour14"));
    $("#hour15 textarea").val(localStorage.getItem("hour15"));
    $("#hour16 textarea").val(localStorage.getItem("hour16"));
    $("#hour17 textarea").val(localStorage.getItem("hour17"));
});






        // function saveToLocal() {
        //     var value = $(this).prev().val()
        //     console.log(value)
        //     localStorage.setItem(value, "savedInput");
        //     var userInput = localStorage.getItem(value);
        //     textAreaEl.textContent = userInput;
        // }



    //     function renderLastSaved() {
    //         var userInput = localStorage.getItem(saved);
    //         textAreaEl.textContent = userInput;
    //     }
    //     renderLastSaved();

    // })















