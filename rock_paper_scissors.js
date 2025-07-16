const rock = 0
const paper = 1
const scissors = 2

const player = 9
const computer = Math.floor(Math.random() * 3)

if (player === 0) {
    if (computer === 0) {
        console.log("Draw")
    } else if ( computer === 1) {
        console.log("The Computer Won")
    } else if (computer === 2 ) {
        console.log("The player won")
    } else {
        console.log("Error")
    }
} else if (player === 1 ) {
    if (computer === 0) {
        console.log("the player won")
    } else if (computer ===  1) {
        console.log("Draw")
    } else if (computer === 2 ) {
        console.log("Ther computer won")
    } else {
        console.log ("Error")
    }
} else if (player === 2) {
    if (computer === 0 ) {
        console.log("the computer won")
    } else if (computer === 1) {
        console.log("the player won") 
    } else if (computer === 2) {
        console.log("Draw")
    } else {
        console.log("Error")
    }
} else {
        console.log("Error")
    }





