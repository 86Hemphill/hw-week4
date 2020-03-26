// Create Variables
var highScore = document.getElementById("highScorez");
var timer = document.getElementById("timer");
var stQuiz = document.getElementById("btn");
var jb = document.getElementById("jumbotron");
var oList = document.getElementById("list");




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
var q2A = createListItem(["gig", "p", "img", "div"]);
var q3A = createListItem(["br", "lb", "bk", "linb"]);
var q4A = createListItem(["head", "body", "section", "article"]);

// Event listener
stQuiz.addEventListener("click", function () {
    runQuiz(oList, q1A)
});


//  Create <li>

function createListItem (text) {
    var listItem = document.createElement("li");
    listItem.textContent = text;
    return listItem;
}

function runQuiz (parent, children) {
    children.forEach(function (child) {
        parent.appendChild(child);
    });
    stQuiz.style.display = "none";
    oListContent = document.createTextNode(questions[0]);
    oList.appendChild(oListContent);
};







