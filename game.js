//[[Declarations / variables]]
const game = document.getElementById("game");
let cards = ["🍎", "🍎", "🍌", "🍌", "🦎", "🦎", "🍇", "🍇",
    "🐨", "🐨", "🐔", "🐔", "☘️", "☘️", "🍀", "🍀"
]
let needToMatch = null;

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
        card.innerText =  "";

        /////////////////////////////////////////////
        //[[Clicking mechanics]]
        card.addEventListener("click",(e)=>{
            //When clicked, display the card's val!
            let clickedElement = e.currentTarget;
            let cardValue = clickedElement.dataset.value;
            clickedElement.innerText = cardValue;
            if (needToMatch == null) {
                needToMatch = cardValue
            } else {
                 if (needToMatch == cardValue){
                    console.log("Matched!");
                 }
            }
        });
        ////////////////////////////////////////////
        
        game.appendChild(card);
    }
}

//===============================================================

createBoard() //Initialize the game board!

