let resultarea = document.getElementById('result')

function calcR(click){
    switch (click.value){
        case "C":
            resultarea.innerHTML = ""
            break
        case "=":
           resultarea.innerHTML = eval(resultarea.textContent)
           break
        default:
            resultarea.innerHTML += click.value;
            break
    }
}