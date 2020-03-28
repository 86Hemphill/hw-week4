// Create Variables
var highScore = document.getElementById("highScore");
var highScoreContent = highScore.innerHTML;
var timer = document.getElementById("timer");
var stQuiz = document.getElementById("btn");
var jb = document.getElementById("jumbotron");
var oList = document.getElementById("list");
var quest = document.getElementById("quest");

// Q&A's

var q1 = {
    question : "Which component is not considered a primary building block of web dev?",
    options : [
        createListItem("Snake"),
        createListItem("html"),
        createListItem("css"),
        createListItem("javascript")],
    correctAnswer : createListItem("Snake"),
    wrongAnswer : [
        createListItem("html"),
        createListItem("css"),
        createListItem("javascript")]
    };
var q2 = {
    question : "Which of the following is not an html tag?",
    options : [createListItem("gig"),
    createListItem("p"),
    createListItem("img"),
    createListItem("div")],
    correctAnswer : createListItem("gig"),
    wrongAnswer : [createListItem("p"),
    createListItem("img"),
    createListItem("div")]
    };
var q3 = [{
    question : "Which tag creates a line break?",
    correctAnswer : createListItem("br"),
    wrongAnswer : [createListItem("lb"),
    createListItem("bk"),
    createListItem("linb")]
    }];
var q4 = [{
    question : "Which section should the page title be placed in?",
    correctAnswer : createListItem("head"),
    wrongAnswer : [createListItem("body"),
    createListItem("section"),
    createListItem("article")]
    }];

// Event listener

stQuiz.addEventListener("click", function() {
    var highScoreContent = 0;
    runQuiz (oList, q1.options);
    stQuiz.style.display = "none";
    questContent = document.createTextNode(q1.question);
    quest.appendChild(questContent);
});
// //  Create <li>

function createListItem (text) {
    listItem = document.createElement("li");
    listItem.textContent = (text);
    return listItem;
};

function runQuiz (parent, children) {
    children.forEach(function (child) {
        parent.appendChild(child);
})};

q1.correctAnswer.addEventListener("click", function () {
    questContent.remove();
    $(oList).empty();
    runQuiz(oList, q2.options);
    stQuiz.style.display = "none";
    questContent = document.createTextNode(q2.question);
    quest.appendChild(questContent);
    highScoreContent += 10; 
});   

q1.wrongAnswer.forEach(function(element) {
    element.addEventListener("click", function () {
    questContent.remove();
    $(oList).empty();
    runQuiz(oList, q2.options);
    stQuiz.style.display = "none";
    questContent = document.createTextNode(q2.options);
    quest.appendChild(questContent);
    highScoreContent += 10; 
})});    
   
