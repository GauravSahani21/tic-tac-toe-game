let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;//playerX, playerO;
let count = 0;

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]

]

const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if(turnO){
            box.innerHTML="O";
            turnO = false;
        }
        else{
            box.innerHTML="X";
            turnO = true;           
        }
        box.disabled = true;
        count++;

        let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }
    })
})
const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };

const  disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}   
const  enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML= "";
    }
}   

const showWinner = (winner) =>{
    msg.innerHTML = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}


const checkWinner = () => {
    for(let pattern of winPattern){  
       let pos1val = boxes[pattern[0]].innerHTML;
       let pos2val = boxes[pattern[1]].innerHTML;
       let pos3val = boxes[pattern[2]].innerHTML;  

       if(pos1val != "" && pos2val != "", pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                showWinner(pos1val);
            }
       }
   }
} 

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

