const display = document.querySelector(".display") 
let currentInput = ""

display.textContent = "0"

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", function(){
        const value = button.textContent

        if (value == "C" ) { 
            currentInput = ""
            display.textContent = "0"
        } else if (value == "=") { 
            display.textContent = eval(currentInput)
            currentInput = ""
        } else { 
            currentInput += value 
            display.textContent = currentInput
        }

    })
}) 

console.log("JS is loaded!")