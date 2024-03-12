
const inputVal = document.querySelector('#input')


const inputButton = document.getElementById('check')

const userGuess = document.getElementById('number');
const actualVal = 46;
let count = 5;

function displayVal(userGuess, actualVal) {
    // alert(inputVal.value)
    
    if (count !== 0) {
        if (userGuess.value === "") {
            alert("Input is empty");
        }
        else if (Number(userGuess.value) === actualVal) {
            alert("Congrats, You Guessed Right!");
        }
        else if (Number(userGuess.value) <= 45){
                alert("Try Again, Value is smaller than the guess");
        }
        else if (Number(userGuess.value) > 46){
            alert("Try Again, Value is bigger than the guess");
        }
        count--;
        if (count === 0) {
            alert("End of the game");
            inputButton.removeEventListener('click', clickListener);
        }
    }
    else {
        alert("End of the game");
    }

}

function clickListener(e) {
    e.preventDefault();
    displayVal(userGuess, actualVal);
}
inputButton.addEventListener('click', clickListener);
