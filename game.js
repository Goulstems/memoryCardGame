//[[Declarations / variables]]
import {clickEvent} from "./helperFunctions/clickCode.js";
const game = document.getElementById("game");                           //`game` is the document element which we will load the game onto!
let cards = ["🍎", "🍎", "🍌", "🍌", "🦎", "🦎", "🍇", "🍇",        //`cards` is all of the different types of cards that can show up!
    "🐨", "🐨", "🐔", "🐔", "☘️", "☘️", "🍀", "🍀"
]                               

//===============================================================
//[[Helper functions]]
//Create board will create the game board
function createBoard() {
    cards.sort(() => Math.random() - 0.5); // Randomizes list

    //This for loop generates the game board!
    //Create a DIV for every card
    for (let i = 0; i < cards.length; i = i + 1) {
        let card = document.createElement("div");
        card.classList.add("card") // <div class="card"></div>
        card.dataset.value = cards[i];
        card.innerText = cards[i];
        // card.innerText =  "";

        /////////////////////////////////////////////
        //[[Clicking mechanics]]
        card.addEventListener("click",clickEvent);
        ////////////////////////////////////////////
        
        game.appendChild(card);
    }
}

//===============================================================

createBoard() //Initialize the game board!

