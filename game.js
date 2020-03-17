

var started = false;
var level = 0;
var i = 0;
var t="";
$(document).click(function() {
  if (!started) {
    $("#game-title").text("List " + level);
    $("#comment").removeClass("hide");
    $("button").removeClass("hide");
    $("#display-title").removeClass("hide");
    $("h1").removeClass("hide");
    $(".start").addClass("hide");
    nextSequence();
    started = true;
    checkAnswer(level);
  }
});
$("button").click(function() {

  var t = $("#comment").val();
  checkAnswer(t);
  nextSequence();
  checkAnswer(level);
});
function checkAnswer(t) {
  if (level === 1) {
    $(".list1").removeClass("hide");
      $(".container").addClass("hide");
    $(".container").fadeOut();

        $(".list2").fadeOut();
          $(".list4").fadeOut();
            $(".list3").fadeOut();
    $("#comment").val('');
    if (t === "y") {
      i = i + 1;
    }

  }
  if (level === 2) {
      $(".list2").fadeIn();
    $(".list2").removeClass("hide");
      $(".list1").addClass("hide");

    $(".list1").addClass("hide");
    $(".list1").fadeOut();

    $("#comment").val('');
    if (t === "y") {
      i = i + 2;
    }

  }
  if (level === 3) {
    $(".list3").removeClass("hide");
      $(".list2").addClass("hide");
    $(".list2").fadeOut();

      $(".list3").fadeIn();
    $(".list2").addClass("hide");
    $("#comment").val('');
    if (t === "y") {
      i = i + 3;
    }

  }
  if (level === 4) {
    $(".list4").removeClass("hide");
    $(".list3").fadeOut();
    $(".list3").addClass("hide");
      $(".list4").fadeIn();
    $(".list3").addClass("hide");
    $("#comment").val('');
    if (t === "y") {
      i = i + 4;
    }

  }
  if(level==5){
        lastSequence();
  }
}

function lastSequence() {

  $("#comment").addClass("hide");
  $("button").addClass("hide");
  $(".list4").addClass("hide");

  $(".y-n").addClass("hide");
  $(".start").addClass("hide");

  if (i === 1) {
    $("#game-title").text("Your color is Yellow");
  } else if (i === 2) {
    $("#game-title").text("Your color is Brown");
  } else if (i === 3) {
    $("#game-title").text("Your color is Green");
  } else if (i === 4) {
    $("#game-title").text("Your color is Sky Blue");
  } else if (i === 5) {
    $("#game-title").text("Your color is Orange");
  } else if (i === 6) {
    $("#game-title").text("Your color is Pink");
  } else if (i === 7) {
    $("#game-title").text("Your color is Red");
  } else if (i === 8) {
    $("#game-title").text("Your color is Dark Green");
  } else if (i === 9) {
    $("#game-title").text("Your color is Purple");
  } else if (i === 10) {
    $("#game-title").text("Your color is Dark Blue");
  }
  else{
      $("#game-title").text("Your entered wrong text.");
  }

}


function nextSequence() {

  level++;
  $("#game-title").text("Is your color over here?");

}


function startOver() {
  level = 0;
  gamePattern = [];
  started = false;

}
