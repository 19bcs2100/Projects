var maindiv = document.querySelector(".maindiv");

maindiv.style.display = "flex";
maindiv.style.justifyContent = "center";
maindiv.style.alignItems = "center";
maindiv.style.height = "100vh";
maindiv.style.width = "100%";

var box = document.createElement("div");

box.classList.add("box");
box.style.display = "flex";
box.style.flexDirection = "column";
box.style.alignItems = "center";
box.style.justifyContent = "center";
box.style.border = "2px solid black";
box.style.height = "500px";
box.style.paddingTop = "40px";
// box.style.paddingBottom = "30px";
box.style.width = "clamp(350px, 80vw, 400px)";
// box.style.gap = "20px";
box.style.borderRadius = "20px";
box.style.backgroundColor = "#525a63";

// box.style.width = "clamp(200px, 80vw, 400px)";
// console.log(box);



maindiv.appendChild(box);
// console.log(maindiv);


let box1 = document.createElement("box1");
let dbox = document.createElement("dbox");
box1.style.display = "flex";
box1.style.justifyContent = "center";
box1.style.alignItems = "center";
box1.style.border = "3px solid black";
box1.style.width = "clamp(300px, 90%, 400px)";
box1.style.height = "130px";
box1.style.borderRadius = "10px";
box1.style.backgroundColor = "#bcc2c9";
box1.style.marginTop = "30px";
box1.style.marginBottom = "30px";

dbox.style.display = "flex";
dbox.style.justifyContent = "right";
dbox.style.alignItems = "center";
dbox.style.fontSize = "30px";
// dbox.style.padding = "2px";
dbox.style.paddingRight = "5px";
dbox.style.overflow = "hidden";
dbox.style.paddingLeft = "6px";
dbox.style.border = "1px solid black";
dbox.textContent = "0";
dbox.style.width = "clamp(300px, 90%, 400px)";
dbox.style.height = "65px";
dbox.style.borderRadius = "10px";
dbox.style.backgroundColor = "#dbe1da";

let box2 = document.createElement("box2");
box2.style.display = "grid";
box2.style.placeItems = "center";
box2.style.gridTemplateColumns = "repeat(4, 1fr)";
box2.style.gap = "10px";
box2.style.borderTopLeftRadius = "6px";
box2.style.borderTopRightRadius = "6px";
box2.style.borderBottomLeftRadius = "20px";
box2.style.borderBottomRightRadius = "20px";
box2.style.width = "clamp(300px, 100%, 400px)";
box2.style.height = "100%";
box2.style.borderTop = "2px solid black";
box2.style.backgroundColor = "#dce0e6";


let buttons = ["7", "8", "9", "×", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "=", "C"];
let firstValue = "";
let operator = "";
let secondValue = "";
let clickSound = new Audio("styles/denielcz-immersivecontrol-button-click-sound-463065.mp3");
let nilSound = new Audio("styles/universfield-new-notification-040-493469.mp3");

buttons.forEach(text => {
    let btn = document.createElement("button");
    btn.textContent = text;
    box2.appendChild(btn);

    btn.addEventListener("click", function () {
        clickSound.currentTime = 0;
        clickSound.play();
        let value = btn.textContent;

        //  1) Clear
        if (value === "C") {
            dbox.textContent = "0";
            firstValue = "";
            secondValue = "";
            operator = "";
            return;
        }

        //  2) Operator (multiply)
        if (value === "×") {
            firstValue = dbox.textContent;
            operator = "×";
            dbox.textContent = "0";
            return;
        }

        //  3) Operator (+)
        if (value === "+") {
            firstValue = dbox.textContent;
            operator = "+";
            dbox.textContent = "0";
            return;
        }

        //  4) Operator (-)
        if (value === "-") {
            firstValue = dbox.textContent;
            operator = "-";
            dbox.textContent = "0";
            return;
        }

        //  5) Equals
        if (value === "=") {
            secondValue = dbox.textContent;

            let result;

            if (operator === "×") {
                result = Number(firstValue) * Number(secondValue);
            } else if (operator === "+") {
                result = Number(firstValue) + Number(secondValue);
            } else if (operator === "-") {
                result = Number(firstValue) - Number(secondValue);
            }

            dbox.textContent = result;
            return;
        }

        //  6) nil reset
        if (dbox.textContent === "nil") {
            dbox.textContent = value;
            return;
        }
        
        //  7) length limit
        if (dbox.textContent.length >= 18) {
            nilSound.play();
            dbox.textContent = "nil";
            return;
        }

        //  8) number input
        if (dbox.textContent === "0") {
            dbox.textContent = value;
        } else {
            dbox.textContent += value;
        }
    });

    // styles
    btn.style.height = "50px";
    btn.style.width = "clamp(40px, 80%, 80px)";
    btn.style.fontSize = "18px";
    btn.style.color = "white";
    btn.style.backgroundColor = "#383e43";
    btn.style.borderRadius = "5px";
});



box.appendChild(box1);
box1.appendChild(dbox);
box.appendChild(box2);



console.log(maindiv);
