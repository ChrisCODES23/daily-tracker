
// ? Time Variable to store moments
var timeToday = moment()
$("#1a").text(timeToday.format("MMM Do YYYY, h:m:ss"));

$(document).ready(function () {
    var currentHour = moment().format("H");


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
    // ? Runs when user clicked savebtn. It also sets the current value of text and time to the local storage. 
    $(".saveBtn").on("click", function () {
        console.log(this);
        var text = $(this).siblings("textarea").val();
        var time = $(this).parent().attr("id");
        console.log(text)
        console.log(time)

        localStorage.setItem(time, text);
    });

    // ? Bunch of getItem to get the item from the local storage

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














