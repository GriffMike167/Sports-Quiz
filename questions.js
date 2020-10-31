// elements created
let uiEl = document.createElement("ul");
let liEl = document.createElement("li");
let p = document.createElement("p");
let h1 = document.createElement("h1");
let button = document.createElement("button");


// start of with arrays  and objects for questions and answers

let questions = [ {

    title: "Which has the longest season out of all the profesional sports",
    choises: [ "Major League Baseball", "National Football League", "National Hockey League", "National Basketball Association"],
    answer: "Major League Baseball"
},

{
    title: "Which teams played in the first ever SuperBowl and what year:",
    choices: ["Kansas City Chiefs vs Green Bay Packers-1959", "Dallas Cowboys vs Buffalo Bills-1994", "Kansas City Chiefs vs Green Bay Packers-1967", "New York Jets vs Baltimore Colts-1969"],
    answer: "Kansas City Chiefs vs Green Bay Packers-1967"
},

{
    title: "This combinations of a pitcher and a catcher will have played in the most combined no-hitter games:",
    choice: ["Clayton Kershaw and Ivan Rodriguiz", "Nolan Ryan and Jason Veritek", "Roy Haliday and Yadier Molina", "Jason Verlander and Yogi Beara"],
    answer: "Nolan Ryan (7) and Jason Veritek (8)"
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
     choices: [ "Lambeau Field", "Wrigley Field", "Fenway Park", "Gillette Stadium"],
     answer: "Fenway Park April 9, 1912"
},

{ 
    title: "Who holds the rushing title for a single season and what year did he achieve it:",
    choices: ["Barry Sanders, 1997", "Eric Dickerson, 1984", "Emmitt Smith, 1995", "Adrian Petterson, 2010"],
    answer: "Eric Dickerson, 1984"

},

{
    title: "How many game winning field goals, made in the last minute of the game does Adam Vinatieri have:",
    choice: [ "17", "27", "20", "5"],
    answer: "20"
},

];

// Variables Needed 

let score = 0;
let question = 0;

// time variables
let timeLeft = 80;
let timerInterval = 0;
let wrongPenalty = 10;

// Querys Needed

let currentTime = document.querySelector("#current-time")
let timer = documnet.querySelector("#startsTime")


// Timer Function 

timer.addEventListener("clcik", function() {
    if (timerInterval === 0) {
        timerInterval = setInterval(function(){
            secondsLeft--;
            currentTime.textContent = "Time: " + secondsLeft;

            if (secondsLeft === 0) {
                clearInterval(timerInterval);
                allDone();
                currentTime.textContent = "Out of time!";
        
            }
        }) 
    }, 1000);
    
})
