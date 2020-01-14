let button = document.getElementById("button");
let container = document.querySelector(".container");
let blocks = document.querySelectorAll(".block");
let img = document.querySelectorAll("img");

let arrayImg = [];
let arrayBlock = [];
let arrayBlocks = [];

let num1 = 0;
let num2 = 0;
let num3 = 0;
let counter = 0;


function startGame() {
    for(let i = 1; i<=10; i++) {
      while(arrayImg.indexOf(num1) !== -1 || arrayBlock.indexOf(num2) !== -1 || arrayBlock.indexOf(num3) !== -1 || num2 === num3) {
          num1 = Math.floor( Math.random() * ( 10 - 1 + 1 ) + 1 );
          num2 = Math.floor( Math.random() * ( 20 - 1 + 1 ) + 1 );
          num3 = Math.floor( Math.random() * ( 20 - 1 + 1 ) + 1 );
      }
      arrayImg.push(num1);
    arrayBlock.push(num2);
    arrayBlock.push(num3);
    img1 = document.querySelector(`.block-${num2}`);
    img2 = document.querySelector(`.block-${num3}`);
    img1.firstElementChild.setAttribute("src", "images/title_" + num1 + ".png");
    img2.firstElementChild.setAttribute("src", "images/title_" + num1 + ".png");
    }
}





button.addEventListener("click", function(e) {
    e.preventDefault();
    container.classList.remove("hidden");
    startGame();
})

blocks.forEach(el => {
    el.addEventListener("click", (e) => {
       e.preventDefault();
       if((el.className == "hidden") == false) {
        el.firstElementChild.classList.remove("hidden");
        arrayBlocks.push(el.firstElementChild.getAttribute("src"));
        counter ++;
        console.log(counter);
        if(counter === 2) {
            if(arrayBlocks[0] === arrayBlocks[1]) {
                img.forEach(el => {
                    if(el.getAttribute("src") === arrayBlocks[0] || el.getAttribute("src") === arrayBlocks[2]) {
                       return el.parentElement.classList.add("disable");
                    }
                })
            }
            setTimeout(() => {
                img.forEach(el => {
                    return el.classList.add("hidden");
                })
                counter = 0;
                arrayBlocks = [];
            }, 1000)
        }
       }
    })
})