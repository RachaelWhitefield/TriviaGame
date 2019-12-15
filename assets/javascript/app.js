$(document).ready(function () {
    var totalQuiz = 10;
    var correctAnswer = 0;
    var masterTimer = 10;
    var timeLeft = masterTimer;
    var audio = new Audio("assets/audio/SpongebobSquarepants.mp3");

    $("#timer").hide();
    $("#gameArea").hide();
    $("#done").hide();
    $("#countdown").hide();
    $("#results").hide();
    
//  Click start button and game timer starts
    document.getElementById("play").addEventListener("click", function() {
        $("#play").on("click", function(){
            audio.play();
            $("#gameArea").show();
            $("#countdown").show();
            $("#play").hide();
            $("#timer").show();
            $("#done").show();
        })
    var downloadTimer = setInterval(function() {
        document.getElementById("countdown").innerHTML = timeLeft;
        timeLeft -= 1;
        if(timeLeft <= 0) {
            clearInterval(timeLeft);
            // outOfTime();
            console.log(timeLeft);
            document.getElementById("countdown").innerHTML = "Time's Up!";
        }
        $("#done").click(function() {
            audio.pause();
            $("#countdown").hide();
            $("#timer").hide();
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

 

});

// function outOfTime() {
//     $("#results").show();
//     $("#gameArea").hide();
//     $("#results").append("<h2>Oops!  Out of time!</h2>");

// };




