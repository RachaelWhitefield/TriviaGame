$(document).ready(function () {
    var totalQuiz = 10;
    var correctAnswer = 0;
    var masterTimer = 120;
    var timeLeft = masterTimer;
    
//  Click start button and game timer starts
    document.getElementById("play").addEventListener("click", function() {
    var downloadTimer = setInterval(function() {
        document.getElementById("countdown").innerHTML = timeLeft;
        timeLeft -= 1;
        if(timeLeft <= 0) {
            clearInterval(timeLeft);
            document.getElementById("countdown").innerHTML = "Time's Up!";
        }
        $("#done").click(function() {
            clearInterval(downloadTimer);
            calculateResults();
            $("#results").show();
        });
    }, 1000);
})

    $("#play").click(function() {
        $("#results").hide();
    });
    $("#done").click(function() {
        $("#results").show();
        $("#done").hide();
        var radios = $('input[type="radio"]:checked');

   radios.each(function(index, radio) {
       var radioValue = parseInt(radio.value);
       correctAnswer += radioValue;

   });
   $('#correct').html("Thanks for playing!  <br><br>You scored: " + correctAnswer + "/" + totalQuiz);
   
    });
    $("#restart").click(function(){
      document.location.reload(true);
  });

})


