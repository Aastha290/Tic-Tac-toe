let btn = document.querySelectorAll(".btn");
let reset = document.querySelector("#reset-btn");
let msg = document.querySelector(".msg");
let gameBtn = document.querySelector(".btn2");
let para = document.querySelector(".para");

// console.log(btn);
// console.log(reset);

let turn0 = true;

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const resetGame = () => {
  turn0 = true;
  enableBox();
  msg.classList.add("hidden");
};

btn.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("Clicked");
    if (turn0) {
      button.innerText = "0";
      turn0 = false;
    } else {
      button.innerText = "X";
      turn0 = true;
    }
    button.disabled = true;

    checkWinner();
  });
});

const disableBtn = () => {
  for (let button of btn) {
    button.disabled = true;
  }
};

const enableBox = () => {
  for (let button of btn) {
    button.disabled = false;
    button.innerText = "";
  }
};

const showWinner = (winner) => {
  para.innerText = `Congratulation, Winner is ${winner}`;
  msg.classList.remove("hidden");
  disableBtn();
};

const gameDraw = () => {
  para.innerText = "Quick,Draw!! Start a new game";
  msg.classList.remove("hidden");
  disableBtn();
};

const checkWinner = () => {
  let draw = true;
  for (let pattern of winPatterns) {
    //console.log(pattern[0], pattern[1], pattern[2]);
    let pos1Val = btn[pattern[0]].innerText;
    let pos2Val = btn[pattern[1]].innerText;
    let pos3Val = btn[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos2Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("winner", pos1Val);
        showWinner(pos1Val);
      }
    } else {
      draw = false;
    }
  }
  if (draw) {
    gameDraw();
  }
};

gameBtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
