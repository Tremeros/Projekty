let buttons = document.querySelectorAll(".btn");
let password = document.querySelector(".password");
let start = document.querySelector(".start__btn");
let game = document.querySelector(".game");
let restart = document.querySelector(".restart__btn");
let gameSpan = document.querySelector(".game_span");
let canvas = document.querySelector(".canvas");
let ctx = canvas.getContext("2d");
let trials = 7;
let word = "";
let count = 0;

let wordsArray =[
    "javascript",
    "frontend",
    "fullstack",
    "react",
    "angular",
    "nodejs",
]



function createPassword(array) {
    let pswrd = array[Math.floor(Math.random() * array.length)];
    word = pswrd;
    console.log(word);
    for(let i=0; i<pswrd.length; i++) {
        let ltr = document.createElement("div");
        ltr.classList.add("letter");
        password.append(ltr);
    }
}

createPassword(wordsArray);

buttons.forEach(el => {
    el.addEventListener("click", function(e) {
        e.preventDefault();
           count = 0;
        for(let i=0; i<word.length; i++) {
            if(word[i] === el.innerHTML) {
                document.querySelector(`.password div:nth-of-type(${i + 1})`).innerText = el.innerText;
                count ++;
            }
            el.disabled = true;
        }
        if(count === 0) {
            trials --;
            gameSpan.innerText = trials;
            ctx.moveTo(30, 20);
            ctx.lineTo(30, 130);
            ctx.strokeStyle = "black";
            ctx.stroke();
        }
       
    })
})






start.addEventListener("click", function(e) {
    e.preventDefault();
    game.classList.remove("hidden");
    start.classList.add("hidden");
    restart.classList.remove("hidden");
    gameSpan.innerText = trials;
})

restart.addEventListener("click", function(e) {
    e.preventDefault();
    game.classList.add("hidden");
    start.classList.remove("hidden");
    restart.classList.add("hidden");
})




