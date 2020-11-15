
let highScore = document.querySelector("#highScore");
let clear = document.querySelector("#clear");
let backButton = document.querySelector("#backButton");


clear.addEventListener("click", function(){
    localStorage.clear(); 
        location.reload();
});

let allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null) {
    for (let i = 0; i < allScores.length; i++) {
        

        let liEl = document.createElement("li")
        liEl.textContent = allScores[i].autograph + "" + allScores[i].score;
        highScore.appendChild(liEl)
        
    }
}

backButton.addEventListener("click", function(){
    window.location.replace("index.html")
});