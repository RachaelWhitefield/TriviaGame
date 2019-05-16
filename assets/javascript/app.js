$(document).ready(function() {
    var questionCounter = 0;
    var time = 15;
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unansweredQuestions = 0;
    


var questions = [ 
    {
        question: "Where does everyone live?",
        choices:  ["Shell City", "Bubble City", "Rock Bottom", "Bikini Bottom"],
        correctAnswer: "Bikini Bottom",
        rightImage: "<img src='assets/images/bikinibottom.png'>", 
        wrongImage: "<img src='assets/images/nopeRainbow.jpg'>"

    },
    {
        question: "What does Spongebob live in?",
        choices:  ["Anchor", "Pineapple", "Tree Dome", "Easter Island Head"],
        correctAnswer: "Pineapple",
        rightImage: "<img src='assets/images/pineapple.png'>",
        wrongImage: "<img src='assets/images/nopeActually.jpg'>"
    },
    {
        question: "What is Mr. Krabs' first name?",
        choices: ["Gary", "Eugene", "Patchy", "Larry"],
        correctAnswer: "Eugene",
        rightImage: "<img src='assets/images/krabs.jpg'>",
        wrongImage: "<img src='assets/images/nopeHair.jpg'>"
    },
    {
        question:  "Who is Mermaid Man's sidekick?",
        choices:   ["The Quickster", "Captain Magma", "Barnacle Boy", "The Elastic Waistband"],
        correctAnswer: "Barnacle Boy",
        rightImage: "<img src='assets/images/Mermaid_Man_and_Barnacle_Boy.jpg'>" ,
        wrongImage: "<img src='assets/images/nopeYelling.jpg'>"
    },
    {
        question:   "Who is always trying to steal the Krabby Patty formula?",
        choices:    ["Plankton", "ManRay", "The Flying Dutchman", "Old Man Jenkins"],
        correctAnswer: "Plankton",
        rightImage: "<img src='assets/images/plankton.jpg'>",
        wrongImage: "<img src='assets/images/realDinerSbSp.png'>"
    },
    {
        question:   "Who is Spongebob's driving instructor?",
        choices:    ["Sandy Cheeks", "Perch Perkins", "Karen", "Mrs. Puff"],
        correctAnswer:  "Mrs. Puff",
        rightImage:  "<img src='assets/images/mrsPuff.jpg'>",
        wrongImage: "<img src='assets/images/sadCooking.jpg'>"
    },
    {
        question:   "Who always yells, 'My leg?'" ,
        choices:     ["Patrick Star", "Bubble Bass", "Fred Rechid", "Squilliam Fancyson"],
        correctAnswer:  "Fred Rechid",
        rightImage:  "<img src='assets/images/Fred.jpg'>",
        wrongImage: "<img src='assets/images/thinking.jpg'>"
    },
    {
        question:   "Squidward is a ...?",
        choices:     ["Cuttlefish", "Squid", "Octopus", "Snail"],
        correctAnswer:  "Octopus",
        rightImage:  "<img src='assets/images/squidward.jpg'>",
        wrongImage: "<img src='assets/images/wellingUp.jpg'>"
    },
    {
        question:   "Who is Pearl's favorite band?",
        choices:    ["The Sonars", "The Bird Brains", "Ned and the Needlefish", "Boys Who Cry"],
        correctAnswer:  "Boys Who Cry",
        rightImage:  "<img src='assets/images/pearl.jpg'>",
        wrongImage: "<img src='assets/images/wrong-answer-sb&patrick.jpg'>"
    },
    {
        question:   "What is the most commonly used name for Spongebob's pet?",
        choices:    ["Gare-Bear", "Garold Wilson Jr.", "Gary", "Miss Tuffsy"],
        correctAnswer:  "Gary",
        rightImage:  "<img src='assets/images/gary.png'>",
        wrongImage: "<img src='assets/images/underwear.jpg'>"
    }
];   

function questionContent() {
    var questionText = "<p>" +
    questions[questionCounter].question + 
    "</p><p class='choices'>" +
    questions[questionCounter].choices[0] +
    "</p><p class='choices'>" +
    questions[questionCounter].choices[1] +
    "</p><p class='choices'>" +
    questions[questionCounter].choices[2] +
    "</p><p class='choices'>" + 
    questions[questionCounter].choices[3] +
    "</p>";
    $("#gameArea").html(questionText);
}

function userRight() {
    $("#gameArea").html("<p>Yup!</p>");
    correctAnswers++;
    var correctAnswer = questions[questionCounter].correctAnswer;
    setTimeout(nextQuestion, 3000);
    questionCounter++;
}

function userWrong() {
    $("#gameArea").html("<p>Nope!</p>");
    incorrectAnswers++;
    var correctAnswer = questions [questionCounter].correctAnswer;
    $("gameArea").append("<p>The answer was <span class='answer'>" +
    correctAnswer + 
    "</span></p>" +
    questions[questionCounter].image);
    setTimeout(nextQuestion, 2000);
    questionCounter++;
}

function nextQuestion() {
    questionContent();
}
questionContent()
$(document).on("click", ".choices", function(){
    var userChoice = $(this).text();
    console.log($(this).text());

    if (userChoice === questions[questionCounter].correctAnswer) {
        console.log("Answer is right");
        userRight();
    } else {
        console.log("The answer is wrong");
        userWrong();
    }

})







})