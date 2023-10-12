// $("#btn").click(function(){
// //call function
// calc();
// });

//if enter key is clicked instead of button
$(document).keydown(function(e){
  var key = e.which;

  if(key == 13){
    calc();
    $("#btn").hide();
  }
});

//calculates whether this or that will be picked
 function calc(){
  //calculates random number
  var randomNumber = Math.floor(Math.random() * 3);

  //gets input
  var input1 = $("#firstInput").val();
  var input2 = $("#secondInput").val();

  //if statement picking this or that randomly
  if(randomNumber == 1){
    $("#result").text(input1);
  }
  else if(randomNumber == 2)
  {
    $("#result").text(input2);
  }
  else{
    $("#result").text("Maybe neither then")
  }
}
