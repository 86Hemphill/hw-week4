// Create Variables
var highScore = document.getElementById("highScore");
var highScoreContent = highScore.innerHTML;
var timer = document.getElementById("timer");
var stQuiz = document.getElementById("btn");
var jb = document.getElementById("jumbotron");
var oList = document.getElementById("list");
var quest = document.getElementById("quest");





// Q&A's
var questions = [
    "Which component is not considered a primary building block of web dev?",
    "Which of the following is not an html tag?",
    "Which tag creates a line break?",
    "Which section should the page title be placed in?"];
var q1A = [
    createListItem("Snake"),
    createListItem("html"),
    createListItem("css"),
    createListItem("javascript")
];
var q2A = [
    createListItem("gig"),
    createListItem("p"),
    createListItem("img"),
    createListItem("div")
];
var q3A = [
    createListItem("br"),
    createListItem("lb"),
    createListItem("bk"),
    createListItem("linb")
];
var q4A = [
    createListItem("head"),
    createListItem("body"),
    createListItem("section"),
    createListItem("article")
];

// Event listener
// stQuiz.addEventListener("click", function () {
//     var highScoreContent = 0;
//     runQuiz(oList, q1A)
//     stQuiz.style.display = "none";
//     questContent = document.createTextNode(questions[0]);
//     quest.appendChild(questContent);
//         if (q1A[0].addEventListener("click", function () {
//             questContent.remove();
//             $(oList).empty();
//             runQuiz(oList, q2A)
//             stQuiz.style.display = "none";
//             questContent = document.createTextNode(questions[1]);
//             quest.appendChild(questContent);
//             highScoreContent += 10;
        
//         )} else if (q1A[1].addEventListener("click", function () {
//                 (q1A[1].addEventListener("click", function () {
//                 questContent.remove();
//                 $(oList).empty();
//                 runQuiz(oList, q2A)
//                 stQuiz.style.display = "none";
//                 questContent = document.createTextNode(questions[1]);
//                 quest.appendChild(questContent);
        
//     }
// });

stQuiz.addEventListener("click", function() {
    var highScoreContent = 0;
    runQuiz(oList, q1A)
    stQuiz.style.display = "none";
    questContent = document.createTextNode(questions[0]);
    quest.appendChild(questContent);
    if (q1A[0].addEventListener("click", function () {
        questContent.remove();
        $(oList).empty();
        runQuiz(oList, q2A)
        stQuiz.style.display = "none";
        questContent = document.createTextNode(questions[1]);
        quest.appendChild(questContent);
        highScoreContent += 10; 
        
    })) {} else if(q1A[1||2||3].addEventListener("click", function (){
        questContent.remove();
        $(oList).empty();
        runQuiz(oList, q2A)
        stQuiz.style.display = "none";
        questContent = document.createTextNode(questions[1]);
        quest.appendChild(questContent);
        highScoreContent += 10; 
        
    })) {}
});

// q1A[0].addEventListener("click", function () {
//     questContent.remove();
//     $(oList).empty();
//     runQuiz(oList, q2A)
//     stQuiz.style.display = "none";
//     questContent = document.createTextNode(questions[1]);
//     quest.appendChild(questContent);
// });


//  Create <li>

function createListItem (text) {
    listItem = document.createElement("li");
    listItem.textContent = text;
    return listItem;
}

function runQuiz (parent, children) {
    children.forEach(function (child) {
        parent.appendChild(child);
    });
};







