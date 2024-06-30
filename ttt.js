// let boxes=document.querySelectorAll('.box');
// let resetbtn=document.querySelector('#reset');
// let newGamebtn=document.querySelector('#new-btn');
// let msgContainer=document.querySelector('#msg-container');
// let msg=document.querySelector('#msg');

// let turn0 =true;//playerX,playrtY
// let winPatterns=[
//     [0,1,2],
//     [0,3,6],
//     [0,4,8],
//     [1,4,7],
//     [2,5,8],
//     [2,4,6],
//     [3,4,5],
//     [6,7,8],
// ];

// const resetGame=function(reset){
//     turn0=true;
//     enable();
//     msgContainer.classList.add("hide");
// }

// boxes.forEach((box)=>{
//     box.addEventListener('click',function(e){
       
//         if(turn0){
//             box.innerText="0";
//             turn0=false;
//         }else{
//             box.innerText="X";
//             turn0=true;
//         }
//         box.disabled=true;

//         checkWinner();
//     });
// });

// const disable=function(){
//     for(let box of boxes){
//         box.disabled=true;
//     }
// }

// const enable=function(){
//     for(let box of boxes){
//         box.disable=false;
//         box.innerText="";
//     }
// }

// const showWinner=function(winner){
//     msg.innerHTMKL=`Congratulations winner is ${winner}`;
//     msgContainer.classList.remove("hide");
//     disable();
// }

// const checkWinner=function(){
//    for(let pattern of winPatterns){
//      console.log(pattern[0],pattern[1],pattern[2]);
//      console.log(
//         boxes[pattern[0]].innerText,
//         boxes[pattern[1]].innerText,
//         boxes[pattern[2]].innerText
//      );
//      let pos1Val=boxes[pattern[0]].innerText;
//      let pos2Val=boxes[pattern[1]].innerText;
//      let pos3Val=boxes[pattern[2]].innerText;

//      if(pos1!="" && pos2!="" && pos3!=""){
//         if(pos1Val==pos2Val && pos2Val==pos3Val){
            
//             showWinner(pos1Val);
//             return true;
//         }
//      }
//    }
// };

// newGamebtn.addEventListener('click',resetGame);
// resetbtn.addEventListener('click',resetGame);



let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerX, playerO
let count = 0; //To Track Draw

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  count = 0;
  enableBoxes();
  msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      //playerO
      box.innerText = "O";
      turnO = false;
    } else {
      //playerX
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    count++;

    checkWinner();

    // if (count === 9 && !isWinner) {
    //   gameDraw();
    // }
  });
});

// const gameDraw = () => {
//   msg.innerText = `Game was a Draw.`;
//   msgContainer.classList.remove("hide");
//   disableBoxes();
// };

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
        return true;
      }
    }
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);