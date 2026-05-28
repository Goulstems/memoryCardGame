let selectedCard = null;         //`selectedCard` is responsible for logic of tracking matches (are there 0? are there1? are there 2?)
let matches = [];               //`matches` list is to actually keep track of matches as we click them!

export function clickEvent(e){
    //When clicked, display the card's val!
    let clickedElement = e.currentTarget;
    let clickedCardValue = clickedElement.dataset.value;
    clickedElement.innerText = clickedCardValue;
    if (selectedCard == null) {                     //First match click
        selectedCard = clickedCardValue
        matches.push(clickedElement);
        clickedElement.classList.add("selected");
    } else if (selectedCard == clickedCardValue){   //Pair check
        matches.push(clickedElement);
        selectedCard = null;
        matches[0].classList.add("matched");
        matches[1].classList.add("matched");
        matches=[];
    } else {                                        //Swap check (clicked one, then another that did not match: switch to the latest clicked!)
        matches[0].classList.remove("selected");
        matches[0] = clickedElement;
        matches[0].classList.add("selected");
        selectedCard = clickedCardValue;
    }
}