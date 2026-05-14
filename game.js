//[[Declarations / variables]]
const game = document.getElementById("game");                           //`game` is the document element which we will load the game onto!
let cards = ["🍎", "🍎", "🍌", "🍌", "🦎", "🦎", "🍇", "🍇",        //`cards` is all of the different types of cards that can show up!
    "🐨", "🐨", "🐔", "🐔", "☘️", "☘️", "🍀", "🍀"
]                               
let needToMatch = null;         //`needToMatch` is responsible for logic of tracking matches (are there 0? are there1? are there 2?)
let matches = [];               //`matches` list is to actually keep track of matches as we click them!

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
        card.addEventListener("click",(e)=>{
            //When clicked, display the card's val!
            let clickedElement = e.currentTarget;
            let cardValue = clickedElement.dataset.value;
            clickedElement.innerText = cardValue;
            if (needToMatch == null) {              //First match click
                needToMatch = cardValue
                matches.push(clickedElement);
            } else {
                 if (needToMatch == cardValue){
                    matches.push(clickedElement);
                    console.log("Matched!");
                    needToMatch = null;
                    matches[0].classList.add("matched");
                    matches[1].classList.add("matched");
                 } else {
                    matches = [];
                    needToMatch = null;
                 }
            }
        });
        ////////////////////////////////////////////
        
        game.appendChild(card);
    }
}

//===============================================================

createBoard() //Initialize the game board!

