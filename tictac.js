let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newbtn = document.querySelector("#newbtn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")

let turn_o=true;

//2d array
// let arr2 = [["apple","orange"],["carrot","spinach"],["wheat","corn"]];

const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetgame = ()=>{
    turn_o=true;
    enable();
    msgcontainer.classList.add("hide");

}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked")
        if(turn_o){
            box.innerText="O";
            turn_o=false;
        }
        else{
            box.innerText="X";
            turn_o=true;
        }
        box.disabled = true;

        checkwinner();
    })
})
const disable = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enable = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}
const showwinner = (winner)=>{
    msg.innerText = `congratulations the winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disable();

};
const checkwinner = ()=>{
    for (pattern of winpatterns){
        
            let pos1val =boxes[pattern[0]].innerText;
            let pos2val = boxes[pattern[1]].innerText;
            let pos3val = boxes[pattern[2]].innerText;
        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val==pos2val && pos2val==pos3val){
                console.log("winner",pos1val);

                showwinner(pos1val);
            }
        }
    }
}

newbtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);
