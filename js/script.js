// bersaglio #container html
let containerEl = document.getElementById("container")


// creo il mio ciclo
for (let i = 1; i <= 100; i++) {

    // creo un nuovo elemento
    let newElement = document.createElement ("div")
    
    // dico a newElement di essere figlio di #container
    containerEl.append(newElement);

    newElement.style.backgroundColor = "yellow";

    newElement.style.border = "1px solid darkgreen";

    console.log(newElement)

    if(i % 3 == 0) {
        newElement.innerHTML = "Fizz";
        newElement.style.backgroundColor = "#fd00cf" ;
    }

    if(i % 5 == 0) {
        newElement.innerHTML += "Buzz";
        newElement.style.backgroundColor = "#5700f0" ;

    }

    if(newElement.innerText == "") {
       newElement.innerHTML = i;

    }
}
