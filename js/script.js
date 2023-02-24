// bersaglio #container html
let containerEl = document.getElementById("container")


// creo il mio ciclo
for (let i = 1; i <= 100; i++) {

    // creo un nuovo elemento
    let newElement = document.createElement ("div")
    
    // dico a newElement di essere figlio di #container
    containerEl.append(newElement);

    newElement.innerHTML = i;

    newElement.style.border = "1px solid Red";

    console.log(newElement)
}
