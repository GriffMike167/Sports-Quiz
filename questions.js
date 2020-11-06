
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


let score = 0;
let questionIndex = 0;

let wrapper = document.querySelector("#wrapper");
let currentTime = document.querySelector("#currentTime");
let timer = document.querySelector("#startTime");
let questionsDiv = document.querySelector("#questionsDiv");
let viewScore = document.querySelector("a[href ='high_score.html'")


let timeLeft = 80;
let holdInterval = 0;
let timePenalty = 10;


viewScore.addEventListener("click", function(){
    window.location.replace("high_score.html")
});
let ulEl = document.createElement("ul");


timer.addEventListener("click", function () {
   
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            timeLeft--;
            currentTime.textContent = "Time: " + timeLeft;

            if (timeLeft <= 0) {
                clearInterval(holdInterval);
                allDone();
                currentTime.textContent = "Time's up!";
            }
        }, 1000);
    }
    render(questionIndex);
});


function render(questionIndex) {
   
    questionsDiv.innerHTML = "";
    ulEl.innerHTML = "";
   
    for (var i = 0; i < questions.length; i++) {
        
        var userQuestion = questions[questionIndex].title;
        var userChoices = questions[questionIndex].choices;
        questionsDiv.textContent = userQuestion;
    }
    
    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsDiv.appendChild(ulEl);
        ulEl.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })

    for (let i = 0; i < 5; ++i) {
        let randomQustion = Math.floor(Math.random() * Math.floor(questionIndex.length))
        console.log(randomQustion);






}}

function compare(event) {
    let element = event.target;

    if (element.matches("li")) {

        let createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
        questionsDiv.appendChild(createDiv);
        
        if (element.textContent == questions[questionIndex].answer) {
            score++;
            createDiv.textContent = "Goal!:  " + questions[questionIndex].answer;
            
        } else {
            
            timeLeft = timeLeft - timePenalty;
            createDiv.textContent = "Flag on the play:  " + questions[questionIndex].answer;
        }

    }
    
    questionIndex++;

    if (questionIndex >= questions.length) {
       
        allDone();
        createDiv.textContent = "Game over your score is  " + score + "/" + questions.length + " Correct!";
    } else {
        render(questionIndex);
    }
    

}

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

    if (timeLeft >= 0) {
        let timeRemaining = timeLeft;
        let pEl2 = document.createElement("p");
        clearInterval(holdInterval);
        pEl.textContent = "Your final is: " + timeRemaining;
        questionsDiv.appendChild(pEl2);
    }
   
    let createLabel = document.createElement("label");
    createLabel.setAttribute("id", "createLabel");
    createLabel.textContent = "Enter your autograph: ";
    questionsDiv.appendChild(createLabel);

    
    let createInput = document.createElement("input");
    createInput.setAttribute("type", "text");
    createInput.setAttribute("id", "initials");
    createInput.textContent = "";
    questionsDiv.appendChild(createInput);

    
    let createSubmit = document.createElement("button");
    createSubmit.setAttribute("type", "submit");
    createSubmit.setAttribute("id", "Submit");
    createSubmit.textContent = "Submit";
    questionsDiv.appendChild(createSubmit);

    
    createSubmit.addEventListener("click", function () {
        let autograph = createInput.value;

        if (autograph === null) {

            console.log("No value entered!");

        } else {
            let finalScore = {
                autograph: autograph,
                score: timeRemaining
            }
            console.log(finalScore);
            let allScores = localStorage.getItem("allScores");
            if (allScores === null) {
                allScores = [];
            } else {
                allScores = JSON.parse(allScores);
            }
            allScores.push(finalScore);
            let newScore = JSON.stringify(allScores);
            localStorage.setItem("allScores", newScore);
            
            window.location.replace("high_score.html");
        }
    });

}
