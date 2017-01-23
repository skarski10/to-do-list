// Business Logic
function ToDoList(task) {
  this.masterList = task;
}

// User Logic
$(document).ready(function() {
  $('form').submit(function() {
    event.preventDefault();
    var userInput = $('#user-input').val();
    var addToList = new ToDoList(userInput);

    $("#output").append("<li><span class='op'>" + addToList.masterList + "</li></span>");

    $("input#user-input").val("");

    $("li").click(function () {
      $(this).remove();
    });
  });
});
