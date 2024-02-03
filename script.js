let user_score = 0;
let com_score = 0;

const gen_com_choice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random() * 3);
    return options[randomNum];
}

const play_game = (user_choice) => {
    console.log("User choice: ", user_choice);
    //Generate computer's choice
    const comm_choice = gen_com_choice();

    console.log("Computer choice: ", comm_choice);


    if (user_choice === comm_choice) {
        console.log("The game is draw");
    } else {
        if ((user_choice === 'rock') && (comm_choice === 'scissors')) {
            user_score++;
            console.log('You win this round');
        }
        else if ((user_choice === 'rock') && (comm_choice === 'paper')) {
            com_score++
            console.log('You lose this round');
        }
        else if ((user_choice === 'paper') && (comm_choice === 'scissors')) {
            user_score++;
            console.log('You lose this round');
            com_score++;
        }


    }
}



const choice = document.querySelectorAll(".image");

choice.forEach((image) => {
    image.addEventListener("click", () => {
        const user_choice = image.getAttribute("id");
        play_game(user_choice);
    })
}
)