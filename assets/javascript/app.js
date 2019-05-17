$(document).ready(function() {
    var questionCounter = 0;
    var time = 15;
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unansweredQuestions = 0;
    



// function questionContent() {
//     var questionText = "<p>" +
//     questions[questionCounter].question + 
//     "</p><p class='choices'>" +
//     questions[questionCounter].choices[0] +
//     "</p><p class='choices'>" +
//     questions[questionCounter].choices[1] +
//     "</p><p class='choices'>" +
//     questions[questionCounter].choices[2] +
//     "</p><p class='choices'>" + 
//     questions[questionCounter].choices[3] +
//     "</p>";
//     $("#gameArea").html(questionText);
// }

// function userRight() {
//     $("#gameArea").html("<p>Yup!</p>");
//     rightImage;
//     correctAnswers++;
//     var correctAnswer = questions[questionCounter].correctAnswer;
//     setTimeout(nextQuestion, 3000);
//     questionCounter++;
// }

// function userWrong() {
//     $("#gameArea").html("<p>Nope!</p>");
//     wrongImage;
//     incorrectAnswers++;
//     var correctAnswer = questions [questionCounter].correctAnswer;
//     $("gameArea").append("<p>The answer was <span class='answer'>" +
//     correctAnswer + 
//     "</span></p>" +
//     questions[questionCounter].image);
//     setTimeout(nextQuestion, 3000);
//     questionCounter++;
// }

// function nextQuestion() {
//     questionContent();
// }
// questionContent()
// $(document).on("click", ".choices", function(){
//     var userChoice = $(this).text();
//     console.log($(this).text());

//     if (userChoice === questions[questionCounter].correctAnswer) {
//         console.log("Answer is right");
//         userRight();
//     } else {
//         console.log("The answer is wrong");
//         userWrong();
//     }

// })







// })