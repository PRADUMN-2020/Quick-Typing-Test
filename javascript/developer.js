// Author: Pradumn
// Published: 21 JUNE 2022

// functions

// function for header animation
function headerAnimation() {
  if (i < bioHeader.length) {
    bioHeaderDisplayed += bioHeader[i++];
    $(".hi").html(bioHeaderDisplayed + "<div class='headerCursor'></div>");
    headerCursorAnimation();
    setTimeout(headerAnimation, 500);
  } else {
    setTimeout(function() {
      $(".headerCursor").remove();
    }, 2000);

  }
}

// function for header cursor animation

function headerCursorAnimation() {
  $(".headerCursor").animate({
    opacity: "0"
  }, 400).animate({
    opacity: "1"
  }, 400, headerCursorAnimation);
}

// active page is developer
$(".developer").addClass("active");

// header animation
var bioHeader = "Hi, I am Pradumn.";
var bioHeaderDisplayed = "";
var i = 0;
setTimeout(
  function() {
    headerAnimation();
  }, 1000);
