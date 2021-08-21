// UI
const userinput = document.querySelector(".number");

const type = document.querySelector(".type"),
    show = document.querySelector(".show"),
    forsign = document.querySelector(".signhide"),
    back = document.getElementById("back");


const checknumber = ["1","2","3","4","5","6","7","8","9","0", "."];
const checksigns = ["+", "-", "*", "/", "%", "="];
    userinput.addEventListener("click", (e)=>{
        const value = e.target.value;
        
        if(value === 'ac'){
            show.innerText = "";
            type.innerText = "0";
        }

        if(checknumber.includes(value)){
            if(type.innerText === "0"){
                type.innerText = value;
            }
            else if(type.innerText.includes(".") && value==="."){
                type.innerText = type.innerText;
            }
            else{
                type.innerText += value;
            }


        }

        if(checksigns.includes(value)){
            
           if(type.innerText === "0"){
               show.innerText = "";
           } 

           if(value === "="){
               if(show.innerText){
                calculate();
               } else{
                   show.innerText = "";
                   type.innerText = "Please compute again";
                   type.style.fontSize = "15px";
                   setTimeout(()=>{
                       type.innerText = "0";
                       type.style.fontSize = "60px";
                   }, 2000);
               }   
           } 
           else if(!show.innerText) {
            show.innerText = type.innerText;
            type.innerText = "";
            forsign.innerText = value;
           }
        }
})

back.addEventListener("click", ()=>{
    if( (type.innerText) && type.innerText !== "0"){
        let originalText = type.innerText;
        type.innerText = originalText.slice(0, originalText.length-1);  
    }
});

function calculate(){
    const num1 = Number(show.innerText);
    const num2 = Number(type.innerText);
    const signs = forsign.innerText;

    let cal;

    if(Number.isInteger(num1) && Number.isInteger(num2)){
    switch(signs){
        case "+":
            cal = num1 + num2;
            break;

          case "-":
            cal = num1 - num2;
            break;

          case "*":
            cal = num1 * num2;
            break;

          case "/":
            cal = num1 / num2;
            break;

          case "%":
            cal = num1 % num2;
            break;
    }

    type.innerText = Math.round(cal);
    show.innerText = "";
    forsign.innerText = "";
} else{
    show.innerText = "";
                   type.innerText = "Please compute again";
                   type.style.fontSize = "15px";
                   setTimeout(()=>{
                       type.innerText = "0";
                       type.style.fontSize = "60px";
                   }, 2000);
}

}


