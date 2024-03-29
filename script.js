let user_score = 0;
let com_score = 0;

const msg_con = document.querySelector("#msg_con");
const user_score_para = document.querySelector("#person");
const com_score_para = document.querySelector("#computer");

const gen_com_choice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random() * 3);
    return options[randomNum];
}

const draw_game = () => {
    msg_con.innerText = "Game is draw, Play Again.";
    msg_con.style.backgroundColor = "#E56B6F";
}

const show_winner = (user_win, user_choice, comm_choice) => {
    if (user_win) {
        msg_con.innerText = `You win! Your ${user_choice} beats Computer's ${comm_choice}`;
    } else {
        msg_con.innerText = `You lost. Computer's ${comm_choice} beats your ${user_choice}`;
    }
}

const play_game = (user_choice) => {
    console.log("User choice: ", user_choice);
    const comm_choice = gen_com_choice();
    console.log("Computer choice: ", comm_choice);

    if (user_choice === comm_choice) {
        console.log("The game is draw");
        draw_game();
    } else {
        let user_win = true;
        if ((user_choice === 'rock' && comm_choice === 'scissors') || 
            (user_choice === 'paper' && comm_choice === 'rock') || 
            (user_choice === 'scissors' && comm_choice === 'paper')) {
            user_score++;
            console.log("You win this round");
            user_score_para.innerText = user_score;
            msg_con.style.backgroundColor = "#EAAC8B";
        } else {
            com_score++;
            console.log("You lose this round");
            com_score_para.innerText = com_score;
            msg_con.style.backgroundColor = "#88AB8E";
            user_win = false;
        }
        show_winner(user_win, user_choice, comm_choice);
    }
}

const choice = document.querySelectorAll(".image");
choice.forEach((image) => {
    image.addEventListener("click", () => {
        const user_choice = image.getAttribute("id");
        play_game(user_choice);
    })
});
