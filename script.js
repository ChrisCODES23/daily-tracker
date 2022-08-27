
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
    var value = $(this).prev().val();
    var time = $(this).parent().attr("id");
    console.log(value)
    localStorage.setItem(time, value);

}

function renderLastSaved() {
    var userInput = localStorage.getItem(value);
    textAreaEl.textContent = userInput;
}
renderLastSaved();
















