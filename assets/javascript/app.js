$(document).ready(function () {
    // var startBtn = document.getElementById("play");
    // function confirmAnswers(){
    var totalQuiz = 10;
    var correctAnswer = 0;
    var incorrectAnswer = 0;
    var blank = 0;
    var count = 10;
    var masterTimer = 15;
    var timeLeft = masterTimer;
    var answers = ["Bikini Bottom", "Pineapple", "Eugene", "Barnacle Boy", "Plankton", "Mrs. Puff", "Fred Rechid", "Octopus", "Boys Who Cry", "Gary"];
    // document.getElementById("countdown").innerHTML = timeLeft;


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
    });
    $("#restart").click(function(){
      document.location.reload(true);
  });

})


// for(var i=0; i  < answers.length; i++){
//     answers[i]   
//     console.log(answers[i]);
//     console.log("answer" + (i+1))
//     var answerField = "answer" + (i+1)
//     var radioArray = 'input[name=' + answerField + ']:checked'
//     val = $(radioArray).val();
//     console.log("val", val);
//     console.log('input[name=' + answerField + ']:checked');
    
    
    // we have answers.  We have the user input answers. Now I want to do the math of the correct/incorrect/missed questions
    // how do we check answers? If they match 'var answers'.
    
    // take val and compare that to the array of answers. 
    // How do we track our position in the array that we are looping though
    // hint: line 7 vs line 11
    // confirmAnswers();

    //     if(val === answers[i]){
    //     console.log("true")}
    //     else {
    //         console.log("false");
    //     }


    // }



    // on done button click
    // $("#done").on("click", function(){
    //     confirmAnswers();
        
    // })



    


    
        
            
            // console.log("totalQuiz = ");
            // console.log(totalQuiz);
            
            
            
            
            //     var timeleft = 30;
            //     console.log("test");

            
      
          

    
            //     var answerOne = document.getElementById("answer1id")
            //     console.log(answerOne);

            //     if (answer1id == answerOne) {
            //         correctAnswer++;
            //     } else {
            //         incorrectAnswer++;
            //     };

            //     document.getElementById("correct").innerHTML = correctAnswer;

            //     var answerTwo = document.getElementById("answer2id")
            //     console.log(answerOne);
            //     console.log(answerTwo);

            //     function scoreCount() {
            //         for (var i = 0; i < answers.length; i++) {console.log(answers);
            //         if (answers[i].checked) {
            //             if (answers.indexOf ([i].value) )
            //             correctAnswer++;
            //         } else {
            //             incorrectAnswer++;
            //         }
            //     }
            //  }
             
            //  var totalAnswered = correctAnswer + incorrectAnswer;
            //  console.log(totalAnswered);
            //  if (totalAnswered !== totalQuiz) {
            //      blank = totalQuiz - totalAnswered;
            //  }
            //  $('#correct').html(" " + correctAnswer);
            //  $('#incorrect').html(" " + incorrectAnswer);
            //  $('#blank').html(" " + blank);
