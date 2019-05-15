$(document).ready(function() {
    var questionCounter = 0;
    var time = 15;
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unansweredQuestions = 0;
    
})

var questions = [ 
    {
        question: "Where does everyone live?",
        choices:  ["Shell City", "Bubble City", "Rock Bottom", "Bikini Bottom"],
        correctAnswer: "Bikini Bottom",
        image: "<img src='assets/images/bikinibottom.png'>"
    },
    {
        question: "What does Spongebob live in?",
        choices:  ["Anchor", "Pineapple", "Tree Dome", "Easter Island Head"],
        correctAnswer: "Pineapple",
        image: "<img src='assets/images/pineapple.png'>"
    },
    {
        question: "What is Mr. Krabs' first name?",
        choices: ["Gary", "Eugene", "Patchy", "Larry"],
        correctAnswer: "Eugene",
        image: "<img src='assets/images/krabs.jpg'>"
    },
    {
        question:  "Who is Mermaid Man's sidekick?",
        choices:   ["The Quickster", "Captain Magma", "Barnacle Boy", "The Elastic Waistband"],
        correctAnswer: "Barnacle Boy",
        image: "<img src='assets/images/Mermaid_Man_and_Barnacle_Boy.jpg'>" 
    },
    {
        question:   "Who is always trying to steal the Krabby Patty formula?",
        choices:    ["Plankton", "ManRay", "The Flying Dutchman", "Old Man Jenkins"],
        correctAnswer: "Plankton",
        image: "<img src='assets/images/plankton.jpg'>"
    },
    {
        question:   "Who is Spongebob's driving instructor?",
        choices:    ["Sandy Cheeks", "Perch Perkins", "Karen", "Mrs. Puff"],
        correctAnswer:  "Mrs. Puff",
        image:  "<img src='assets/images/mrsPuff.jpg'>"
    },
    {
        question:   "Who always yells, 'My leg?'" ,
        choices:     ["Patrick Star", "Bubble Bass", "Fred Rechid", "Squilliam Fancyson"],
        correctAnswer:  "Fred Rechid",
        image:  "<img src='assets/images/Fred.jpg'>"
    },
    {
        question:   "Squidward is a ...?",
        choices:     ["Cuttlefish", "Squid", "Octopus", "Snail"],
        correctAnswer:  "Octopus",
        image:  "<img scr='assets/images/squidward.jpg'>"
    },
    {
        question:   "Who is Pearl's favorite band?",
        choices:    ["The Sonars", "The Bird Brains", "Ned and the Needlefish", "Boys Who Cry"],
        correctAnswer:  "Boys Who Cry",
        image:  "<img src='assets/images/pearl.jpg'>"
    },
    {
        question:   "What is the most commonly used name for SpongeBob's pet?",
        choices:    ["Gare-Bear", "Garold Wilson Jr.", "Gary", "Miss Tuffsy"],
        correctAnswer:  "Gary",
        image:  "<img src='assets/images/gary.png'>"
    }
];         