window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");
    showStart();
}


function showStart() {
    console.log("show start");

    document.querySelector("#start").classList.remove("hide");
    document.querySelector("#play").classList.add("pulse");
    document.querySelector("#play").addEventListener("click", hideStart);
    hideStart();

}

function hideStart() {
    console.log("hide start");

    document.querySelector("#play").removeEventListener("click", hideStart);
    document.querySelector("#play").classList.remove("pulse");
    document.querySelector("#start").classList.add("fade_out");
    document.querySelector("#start").addEventListener("animationend", startGame);
    startGame();
}


function startGame() {
    console.log("start game");

    document.querySelector("#start").removeEventListener("animationend", startGame);
    document.querySelector("#start").classList.add("hide");
    playGame();

}


let score = 0;



function playGame() {
    console.log("spil startet");

    document.querySelector("#chime1").addEventListener("click", goodChime);
    document.querySelector("#chime2").addEventListener("click", goodChime);
    document.querySelector("#chime3").addEventListener("click", badChime);
    document.querySelector("#chime4").addEventListener("click", goodChime);
    document.querySelector("#chime5").addEventListener("click", badChime);
    document.querySelector("#chime6").addEventListener("click", badChime);
    document.querySelector("#chime7").addEventListener("click", goodChime);
    document.querySelector("#chime8").addEventListener("click", goodChime);
    document.querySelector("#chime9").addEventListener("click", goodChime);
    document.querySelector("#chime10").addEventListener("click", badChime);
    document.querySelector("#chime11").addEventListener("click", badChime);
    document.querySelector("#chime12").addEventListener("click", goodChime);


}

function goodChime() {

    console.log("goodChime");
    //score = score + 1;
    //score += 1;
    score++;
    console.log(score)
    //skriv variables navn

    document.querySelector("#points").innerHTML = score;

    console.log(this);
    this.classList.add("hide")
    this.removeEventListener;


}

function badChime() {

    console.log("badChime");
    score--;
    console.log(score)
    //skriv variables navn

    document.querySelector("#points").innerHTML = score;

    console.log(this);
    this.classList.add("hide")
    this.removeEventListener;


}
