let needToMatch = null;         //`needToMatch` is responsible for logic of tracking matches (are there 0? are there1? are there 2?)
let matches = [];               //`matches` list is to actually keep track of matches as we click them!

export function clickEvent(e){
    //When clicked, display the card's val!
    let clickedElement = e.currentTarget;
    let cardValue = clickedElement.dataset.value;
    clickedElement.innerText = cardValue;
    if (needToMatch == null) {              //First match click
        needToMatch = cardValue
        matches.push(clickedElement);
        clickedElement.classList.add("selected");
    } else {
            if (needToMatch == cardValue){     //Pair check
                matches.push(clickedElement);
                needToMatch = null;
                matches[0].classList.add("matched");
                matches[1].classList.add("matched");
                matches=[];
            } else {                           //Swap check (clicked one, then another that did not match: switch to the latest clicked!)
            if (!matches[1]){
                matches[0].classList.remove("selected");
                matches[0] = clickedElement;
                matches[0].classList.add("selected");
                needToMatch = cardValue;
            }
        }
    }
}