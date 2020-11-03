
let questions = [ {

    title: "Which has the longest season out of all the profesional sports:  ",
    choices: ["Major League Baseball", "National Football League", "National Hockey League", "National Basketball Association"],
    answer: "Major League Baseball"
},

{
    title: "Which teams played in the first ever SuperBowl and what year:",
    choices: ["Kansas City Chiefs vs Green Bay Packers-1959", "Dallas Cowboys vs Buffalo Bills-1994", "Kansas City Chiefs vs Green Bay Packers-1967", "New York Jets vs Baltimore Colts-1969"],
    answer: "Kansas City Chiefs vs Green Bay Packers-1967"
},

{
    title: "This combinations of a pitcher and a catcher will have played in the most combined no-hitter games:",
    choices: ["Clayton Kershaw and Ivan Rodriguiz", "Nolan Ryan and Jason Veritek", "Roy Haliday and Yadier Molina", "Jason Verlander and Yogi Beara"],
    answer: "Nolan Ryan and Jason Veritek"
},

{
    title: "Were did the Dallas Stars move from in 1993:",
    choices: ["California", "Washington", "Vancouver", "Minnesota"],
    answer: "Minnesota"
},

{
    title: "Which team has won the most Super Bowls:",
    choices: ["San Fransico 49ers", "New England Patriots", "Dallas Cowboys", "Las Vegas Raiders"],
    answer: "New England Patriots"

},

{
     title: "Out of all the profesional sports leauges what is the oldest staduim used:",
     choices: ["Lambeau Field", "Wrigley Field", "Fenway Park", "Gillette Stadium"],
     answer: "Fenway Park"
},

{ 
    title: "Who holds the rushing title for a single season and what year did he achieve it:",
    choices: ["Barry Sanders, 1997", "Eric Dickerson, 1984", "Emmitt Smith, 1995", "Adrian Petterson, 2010"],
    answer: "Eric Dickerson, 1984"

},

{
    title: "How many game winning field goals, made in the last minute of the game does Adam Vinatieri have:",
    choices: ["17", "27", "20", "5"],
    answer: "20"
},

];


var score = 0;
var questionIndex = 0;


var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTime");
var questionsDiv = document.querySelector("#questionsDiv");
var wrapper = document.querySelector("#wrapper");

// Seconds left is 15 seconds per question:
var secondsLeft = 80;
// Holds interval time
var holdInterval = 0;
// Holds penalty time
var penalty = 10;
// Creates new element
var ulCreate = document.createElement("ul");

// Triggers timer on button, shows user a display on the screen
timer.addEventListener("click", function () {
    // We are checking zero because its originally set to zero
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            secondsLeft--;
            currentTime.textContent = "Time: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                allDone();
                currentTime.textContent = "Time's up!";
            }
        }, 1000);
    }
    render(questionIndex);
});

// Renders questions and choices to page: 
// Clears existing data 
// For loops to loop through all info in array
// New for each for question choices
function render(questionIndex) {
   
    questionsDiv.innerHTML = "";
    ulCreate.innerHTML = "";
   
    for (var i = 0; i < questions.length; i++) {
        
        var userQuestion = questions[questionIndex].title;
        var userChoices = questions[questionIndex].choices;
        questionsDiv.textContent = userQuestion;
    }
    
    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsDiv.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}
// Event to compare choices with answer
// Correct condition 
// Will deduct -10 seconds off secondsLeft for wrong answers
function compare(event) {
    var element = event.target;

    if (element.matches("li")) {

        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
       
        if (element.textContent == questions[questionIndex].answer) {
            score++;
            createDiv.textContent = "Goal!:  " + questions[questionIndex].answer;
            
        } else {
            
            secondsLeft = secondsLeft - penalty;
            createDiv.textContent = "Flag on the play:  " + questions[questionIndex].answer;
        }

    }
    // Question Index determines number question user is on
    // All done will append last page with user stats
    questionIndex++;

    if (questionIndex >= questions.length) {
       
        allDone();
        createDiv.textContent = "Game over your score is  " + score + "/" + questions.length + " Correct!";
    } else {
        render(questionIndex);
    }
    questionsDiv.appendChild(createDiv);

}
// All done will append last page
// Heading
// Label
// input
// submit
// Event listener to capture initials and local storage for initials and score
// Travels to final page
function allDone(){
    questionsDiv.innerHTML = "";
    currentTime.innerHTML = "";

    let h1El = document.createElement("h1");
    h1El.setAttribute("id", "h1El");
    h1El.textContent = "Finished!";
    questionsDiv.appendChild(h1El);

    let pEl = document.createElement("p");
    pEl.setAttribute("id", "pEl");
    questionsDiv.appendChild(pEl);

    if (secondsLeft >= 0) {
        let timeRemaining = secondsLeft;
        let pEl2 = document.createElement("p");
        clearInterval(holdInterval);
        pEl.textContent = "Your final is: " + timeRemaining;
        questionsDiv.appendChild(pEl2);
    }
   
    var createLabel = document.createElement("label");
    createLabel.setAttribute("id", "createLabel");
    createLabel.textContent = "Enter your autograph: ";

    questionsDiv.appendChild(createLabel);

    
    var createInput = document.createElement("input");
    createInput.setAttribute("type", "text");
    createInput.setAttribute("id", "initials");
    createInput.textContent = "";

    questionsDiv.appendChild(createInput);

    
    var createSubmit = document.createElement("button");
    createSubmit.setAttribute("type", "submit");
    createSubmit.setAttribute("id", "Submit");
    createSubmit.textContent = "Submit";

    questionsDiv.appendChild(createSubmit);

    
    createSubmit.addEventListener("click", function () {
        var autograph = createInput.value;

        if (autograph === null) {

            console.log("No value entered!");

        } else {
            var finalScore = {
                autograph: autograph,
                score: timeRemaining
            }
            console.log(finalScore);
            var allScores = localStorage.getItem("allScores");
            if (allScores === null) {
                allScores = [];
            } else {
                allScores = JSON.parse(allScores);
            }
            allScores.push(finalScore);
            var newScore = JSON.stringify(allScores);
            localStorage.setItem("allScores", newScore);
            
            window.location.replace("./HighScores.html");
        }
    });

}
