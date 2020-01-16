button = document.querySelector(".start");
let num1 = 3;
let num2 = 3;
let counter = 1;

button.addEventListener("click", () => {
   let intervalId = setInterval(() => {
    b1 = document.querySelector(`.b-${counter}-${num1}`);
    b2 = document.querySelector(`.b-${counter}-${num1 + 1}`);
    b3 = document.querySelector(`.b-${counter}-${num1 + 2}`);
    b4 = document.querySelector(`.b-${counter}-${num1 + 3}`);

    r1 = document.querySelector(`.b-${counter - 1}-${num2}`);
    r2 = document.querySelector(`.b-${counter - 1}-${num2 + 1}`);
    r3 = document.querySelector(`.b-${counter - 1}-${num2 + 2}`);
    r4 = document.querySelector(`.b-${counter - 1}-${num2 + 3}`);

    b1.classList.add("active");
    b2.classList.add("active");
    b3.classList.add("active");
    b4.classList.add("active");

    counter ++;

    if(b1.parentElement.classList.contains("row-20")) {
        clearInterval(intervalId);
    }

   

    r1.classList.remove("active");
    r2.classList.remove("active");
    r3.classList.remove("active");
    r4.classList.remove("active");

    
   }, 1000)
})

window.addEventListener("keypress", (e) => {
    if(e.key == "d") {
        num1 ++;
        num2 ++;
    } else if(e.key == "a") {
        num1 --;
        num2 --;
    }
})