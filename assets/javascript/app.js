$(document).ready(function () {
    var startBtn = document.getElementById("play");
            var totalQuiz = 10;
            answers = ["Bikini Bottom", "Pineapple", "Eugene", "Barnacle Boy", "Plankton", "Mrs. Puff", "Fred Rechid", "Octopus", "Boys Who Cry", "Gary"],
                // data = $("input"),
            correctAnswer = 0;
            incorrectAnswer = 0;
            blank = 0;
            count = 10;

            function initialize() {
                startBtn.style.display = "none";
            }
            var timeleft = 90;
            var downloadTimer = setInterval(function(){
                document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
                timeleft -= 1;
                if(timeleft <= 0) {
                    clearInterval(downloadTimer);
                    document.getElementById("countdown").innerHTML = "Time's Up!"
                }
            }, 1000);

            function scoreCount() {
                for (var i = 0; i < answers.length; i++) {
                    console.log(answers);
                    if (answers[i].checked) {
                        if (answers.indexOf([i].value) )
                            correctAnswer++;
                    } else {
                        incorrectAnswer++;
                    }
                }
            }

            var totalAnswered = correctAnswer + incorrectAnswer;
            console.log(totalAnswered);
            if (totalAnswered !== totalQuiz) {
                blank = totalQuiz - totalAnswered;
            }
            $('#correct').html(" " + correctAnswer);
            $('#incorrect').html(" " + incorrectAnswer);
            $("#blank").html(" " + blank);
        })