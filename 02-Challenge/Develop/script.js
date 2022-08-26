
//  Time
var timeToday = moment()
$("#1a").text(timeToday.format("MMM Do YYYY, h:m:ss"));
var currentHour = moment().format("H")

var textarea = $('textarea')

var timeBlock = $('time-block')
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

    $("#" + i).on("click", saveToLocal)
}
// ? Runs when user clicks the save button
function saveToLocal() {
    var value = $(this).prev().val()
    console.log(value)
    localStorage.setItem(value, "savedInput");

}

function renderLastSaved() {
    var userInput = localStorage.getItem(saved);
    textAreaEl.textContent = userInput;
}
renderLastSaved();
















