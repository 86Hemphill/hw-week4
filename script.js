// Create Variables
var highScore = $("#highScore");
var timer = $("#timer");
var quest = $("#quest");
var area = $("#testArea");
var oList = $("#list");
var score = 0;

// Q&A's

var q1 = {
    question : "Which component is not considered a primary building block of web dev?",
    options : ["snake", "html", "css", "javascript"]
    };
var q2 = {
    question : "Which of the following is not an html tag?",
    options : ["gig", "p", "img", "div"]
    };
var q3 = {
    question : "Which tag creates a line break?",
    options : ["br", "lb", "bk", "linb"]
    };
var q4 = {
    question : "Which section should the page title be placed in?",
    options : ["head", "body", "section", "article"]
    };

$(document).ready(function () {

// Event listener

$("#start").on("click", function () {
    var stQuiz = $(this);
    stQuiz.hide();
    highScore.text = "Highscore :"
    highScore.append(highScore.text);
    quest.append(q1.question);
    // Create Answer Buttons
    var correctBtn = $("<button id='Correct'/><br>")
    correctBtn.text(q1.options[0]);
    $("#answers").append(correctBtn);
    for (var i = 1; i < q1.options.length; i++) {
        var btn = $("<button class='incorrect'/><br>");
        btn.text(q1.options[i]);
        $("#answers").append(btn);
     }
     $("#Correct").on("click", function() {
        score += 50;
         question2();
     });
     $(".incorrect").on("click", function() {
        question2();
    });
});



function question2() {
    $("#btn").hide();
    quest.empty();
    $("#answers").empty();
    quest.append(q2.question);
    var correctBtn = $("<button id='Correct'/><br>")
    correctBtn.text(q2.options[0]);
    $("#answers").append(correctBtn);
    for (var i = 1; i < q2.options.length; i++) {
        var btn = $("<button class='incorrect'/><br>");
        btn.text(q2.options[i]);
        $("#answers").append(btn);
     }
     $("#Correct").on("click", function() {
        score += 50;
         question3();
     });
     $(".incorrect").on("click", function() {
        question3();
     });
};

function question3() {
    $("#btn").hide();
    quest.empty();
    $("#answers").empty();
    quest.append(q3.question);
    var correctBtn = $("<button id='Correct'/><br>")
    correctBtn.text(q3.options[0]);
    $("#answers").append(correctBtn);
    for (var i = 1; i < q3.options.length; i++) {
        var btn = $("<button class='incorrect'/><br>");
        btn.text(q3.options[i]);
        $("#answers").append(btn);
     }
     $("#Correct").on("click", function() {
        score += 50;
         question4();
     });
     $(".incorrect").on("click", function() {
        question4();
    });
};

function question4() {
    $("#btn").hide();
    quest.empty();
    $("#answers").empty();
    quest.append(q4.question);
    var correctBtn = $("<button id='Correct'/><br>")
    correctBtn.text(q4.options[0]);
    $("#answers").append(correctBtn);
    for (var i = 1; i < q4.options.length; i++) {
        var btn = $("<button class='incorrect'/><br>");
        btn.text(q4.options[i]);
        $("#answers").append(btn);
     }
     $("#Correct").on("click", function() {
        score += 50;
        quizComplete();
     });
     $(".incorrect").on("click", function() {
        quizComplete();
    });
};

function quizComplete(){
    $("#btn").hide();
    quest.empty();
    $("#answers").empty();
    var qComplete = "Quiz Complete!";
    quest.append(qComplete);
    var yourScore = $("<h4/>");
    yourScore.text("Your score is " + score + "!");
    area.append(yourScore);
}


// var hsContent = document.createTextNode("Highscore : ");
// highScore.append(hsContent);

});