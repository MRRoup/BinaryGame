setTimeout(()=>{
    difficulty.style.transition = "0.3s linear";
    controlls.style.transition = "0.5s linear";
    difficulty.style.top = "69vh";
},1000)
const buttons = document.querySelectorAll('.difBtn');  
var min;
var max;
function handleButtonClick(event) {  
    const buttonText = event.target.value;  
    console.log(buttonText + ' was pressed.');  
    difficulty.style.top = "100vh";
    controlls.style.top = "39vh";
    if(buttonText == "Easy"){
        min = 3;
        max = 11
        gNum.style.fontSize = "8vw";
        aNum.style.fontSize = "8vw";
        bNums.style.fontSize = "8vw";
    }
    else if(buttonText == "Normal"){
        min = 12;
        max = 21;
        gNum.style.fontSize = "4.5vw";
        aNum.style.fontSize = "4.5vw";
        bNums.style.fontSize = "4.5vw";
    }
    else if(buttonText == "Hard"){
        min = 21;
        max = 30;
        gNum.style.fontSize = "3.2vw";
        aNum.style.fontSize = "3.2vw";
        bNums.style.fontSize = "3.2vw";
    }
    startGame(max, min)
} 
function modifyArray(arr) {  
    // Find the index of the last "1" in the array  
    const lastIndex = arr.lastIndexOf("1");  
    
    // Check if there's no "1" or if the only "1" is in the first position  
    if (lastIndex === -1 || lastIndex === 0) {  
        return arr; // Do nothing  
    }  
    if(arr[lastIndex - 1] == "1"){
        arr[lastIndex - 1] = "0";
    }
    else{arr[lastIndex - 1] = "1"}  
    
    return arr;  
}  

buttons.forEach(button => {  
    button.addEventListener('click', handleButtonClick);  
});


function startGame(max, min){
const length = Math.floor(Math.random() * (max - min + 1)) + min;

var a = "";
var g = "";
for (let i = 0; i < length; i++) {
    const n = Math.floor(Math.random() * 2)
    const ng = Math.floor(Math.random() * 2)
    if(n == 0){
        a+= " 0"
    }
    else{a += " 1"}
    if(ng == 0){
        g+= " 0"
    }
    else{g += " 1"}
}
if(a == g){
    t = Math.floor(Math.random() * (a.length))
    a[t] = String(Number(!Number(a[t])))
}

aNum.innerHTML = a.replaceAll(" ","")
gNum.innerHTML = g.replaceAll(" ","")
a = a.split(" ")
g = g.split(" ") 

const controlls = document.querySelectorAll('.conBtn');  

controlls.forEach(controll => {  
    controll.addEventListener('click', (e)=>{
        var n = "";
        for (const i of a) {
            n+= i
        }
        bNums.innerHTML = (n + "<br>") + bNums.innerHTML
        const con = e.target.value;
        if(con == 1){
            if((a[(a.length) - 1]) == "1"){
                a[(a.length) - 1] = "0"
            }
            else{a[(a.length) - 1] = "1"}
        }
        else if(con == 0){
            modifyArray(a)
        }
        n = "";
        for (const i of a) {
            n+= i
        }
        aNum.innerHTML = n
        if(aNum.innerHTML === gNum.innerHTML){
            alert("You Win")
            window.location.reload()
            
        }
    })});



}