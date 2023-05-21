var currentTab = 0;
// Document ready
$(document).ready(() => {
  currentTab = 1;
  $("#step1").show();
  // Show multitabs step
  $(document).on("click", "ul.multiTabs>li", function () {
    //Show data for tabs
    var TabId = $(this).attr("data-trigger");
    $("div#" + TabId + " ").fadeIn();
    $(`#step${currentTab}-img`).attr("src",`/Assets/Images/step-${currentTab}.png`);
    // Change after click
    currentTab = parseInt(TabId.replace("step", ""));
    $(`#step${currentTab}-img`).attr("src",`/Assets/Images/step-${currentTab}-active.png`);
    $(".tabcontent:not(#" + TabId + ")").hide();
    //functionality for current tab buttons
    totalSteps = 3;
    if (currentTab > totalSteps) {
      $(".next").hide();
      $(".previous").hide();
      $(".finish").show();
    } else {
      $(".next").show();
      $(".previous").show();
      $(".finish").hide();
    }
  });
});
// Next Button function
let totalSteps = 0;
function next() {
  totalSteps = 4;
  if (currentTab < totalSteps) {
    $(".tabcontent").hide();
    $(`#step${currentTab}-img`).attr("src",`/Assets/Images/step-${currentTab}.png`);
    currentTab++;
    $("#step" + currentTab).fadeIn();
    $(`#step${currentTab}-img`).attr("src",`/Assets/Images/step-${currentTab}-active.png`);
  }
}
// Previus Button Function
function prev() {
  totalSteps = 1;
  if (currentTab > totalSteps) {
    $(".tabcontent").hide();
    $(`#step${currentTab}-img`).attr("src",`/Assets/Images/step-${currentTab}.png`);
    currentTab--;
    $("#step" + currentTab).fadeIn();
    $(`#step${currentTab}-img`).attr("src",`/Assets/Images/step-${currentTab}-active.png`);
  }
}
// Functionality for Buttons
var buttonHide = 0;
$(document).ready(function () {
  buttonHide = 3;
  $(".finish").hide();
  $(".next").click(function (event) {
    if (currentTab > buttonHide) {
      event.preventDefault();
      $(this).hide();
      $(".previous").hide();
      $(".finish").show();
    }
  });
});
