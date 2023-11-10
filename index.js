//if enter key is clicked instead of button
// $(document).keydown(function(e){
//   var key = e.which;

//   if(key == 13){
//     calc();
//     $("#btn").hide();
//   }
// });

function screenSize(){
  if (window.innerWidth <= 768) {
    var btn2 = $('<button>Generate!</button>');
    btn2.addClass('btn2'); 
    $('body').append(btn2);

      btn2.click(function(e) {
        calc();
    });
}else{
  $(document).keydown(function(e){
    var key = e.which;
  
    if(key == 13){
      calc();
      $("btn2").hide();
    }
  });
}
}

$(document).ready(function() {
  screenSize();
});

$("btn2").click(function(e){
  calc();
});

function calc(){
  // gets input
  var input1 = $("#firstInput").val();
  var input2 = $("#secondInput").val();

  // checks if input is missing
  if (!input1 || !input2) {
    $("#result").text("Error: Please enter values for both inputs");
    return; // exit the function early to prevent further processing
  }

  // calculates random number
  var randomNumber = Math.floor(Math.random() * 3);

  // if statement picking this or that randomly
  if (randomNumber == 1) {
    $("#result").text(input1);
  } else if (randomNumber == 2) {
    $("#result").text(input2);
  } else {
    $("#result").text("Maybe neither then");
  }
}
