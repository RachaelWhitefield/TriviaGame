$(document).ready(function () {
            var totalQuiz = 10;
            answers = ["Bikini Bottom", "Pineapple", "Eugene", "Barnacle Boy", "Plankton", "Mrs. Puff", "Fred Rechid", "Octopus", "Boys Who Cry", "Gary"],
                // data = $("input"),
            correctAnswer = 0;
            incorrectAnswer = 0;
            blank = 0;
            count = 10;

            function scoreCount() {
                for (var i = 0; i < answers.length; i++) {
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