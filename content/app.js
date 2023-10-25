let myName = "Omar Mohamed Mahmoud";

let index = 1;

function repeatText() {
    document.querySelector(".my-name").textContent = myName.slice(0, index)
    index++

    if(index > myName.length){
        index = 1
    }
}


setInterval(() =>{
    repeatText()
}, 250)

