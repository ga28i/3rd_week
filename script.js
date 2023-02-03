let playerScore = 0
let compScore = 0

const computerPlay = () => {
    const arrOfChoices = ['rock', 'paper', 'scissors']
    const randomNum = Math.floor(Math.random() * 3)
    const compChoice = arrOfChoices[randomNum]
    return compChoice
}

const playRound = (playerSelection, computerSelection) => {
if (playerSelection === computerSelection) {
   return `Tie game! ${playerSelection}`
} else if(playerSelection === 'scissors' && computerSelection === 'rock'){
    compScore++
    return 'You lost! Rock crushes scissors'
}else if(playerSelection === 'scissors' && computerSelection === 'paper'){
    playerScore++
    return 'You won! Scissors cuts paper'
}else if(playerSelection === 'rock' && computerSelection === 'paper'){
    compScore++
    return 'You lost! Paper covers rock'
}else if(playerSelection === 'rock' && computerSelection === 'scissors'){
    playerScore++
    return 'You won! Rock crushes scissors'
}else if(playerSelection === 'paper' && computerSelection === 'scissors'){
    compScore++
    return 'You lost! Scissors cuts paper'
}else if(playerSelection === 'paper' && computerSelection === 'rock'){
    playerScore++
    return 'You won! Paper covers rock'
}
};


const game = () => {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt ('Choose throw', 'rock, paper, scissors').toLowerCase()
        const computerSelection = computerPlay();
        console.log (playRound(playerSelection, computerSelection));
    }
    if (playerScore > compScore){
        return 'You won!'
    }else if (playerScore < compScore) {
        return 'You lost!'
    } else {
        return ' Tied game!'
    }
};

console.log (game ());