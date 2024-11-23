let randomNumber = parseInt(Math.random() *100 + 1)

let submit = document.querySelector('#submit')
let userInput = document.querySelector('#guessField')
let guessSlot = document.querySelector('.guesses')
let remaining = document.querySelector('.lastResult')
let lowOrHi = document.querySelector('.lowOrHi')
let startOver = document.querySelector('.resultParas')

let p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        // console.log(guess)
        validateGame(guess)
    })
}

function validateGame(guess){
    if(isNaN(guess)){
        alert('Please Enter a Valid Number')
    }else if(guess < 1){
        alert('Please Enter a Number Greater than 1')
    }else if(guess > 100){
        alert('Please Enter a Number Less than 100')
    }else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over.Random Number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }

}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You Guessed if Right`)
        endGame()
    }else if (guess < randomNumber){
        displayMessage(`Number is Too Low`)
    }else if(guess > randomNumber){
        displayMessage(`Number is Too High`)
    }

}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess} `;

}
function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;


}
function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}
function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        randomNumber = parseInt(Math.random() *100 + 1)
        prevGuess = []
        numGuess = 1
        lowOrHi.innerHTML = ""
        guessSlot.innerHTML = ""
        remaining.innerHTML = `${11 - numGuess} `
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame = true


    })

}