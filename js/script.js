var toggle = document.querySelector("#toggle");
//console.log(toggle);
var ball = document.querySelector(".ball");
//console.log(ball);
var firstLastName = document.querySelector("h1");
//console.log(firstLastName);
var body = document.querySelector("body");
//console.log(body);

toggle.addEventListener("click", function() {
    if (body.classList.contains("light")) {
        body.classList.remove("light");
        ball.classList.remove("move-right");
        firstLastName.innerText = "Stealth Quincy";
    } else {
        body.classList.add("light");
        ball.classList.add("move-right");
        firstLastName.innerText = "Party Quincy";
    }
});