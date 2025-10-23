let plus = document.querySelector(".plus_btn");
let minus = document.querySelector(".minus_btn");
let numberDisplayer = document.querySelector(".number");

let count = 0;

plus.addEventListener("click", () => {
    numberDisplayer.textContent = "";
    count++;
    numberDisplayer.textContent += count;
})

minus.addEventListener("click", () => {
    numberDisplayer.textContent = "";
    count--;
    numberDisplayer.textContent += count;
})

