let user_score = 0;
let com_score = 0;


const user_score_para=document.querySelector("#person");
const com_score_para=document.querySelector("#computer");

const gen_com_choice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random() * 3);
    return options[randomNum];
}


const draw_game = () => {
    msg_con.innerText = "Game is draw, Play Again.";
}

const show_winner=(user_score,com_score)=>
{
    if(user_score++)
    {
        msg_con.innerText="You Won the Game";
        user_score_para.innerText=user_score;
    }
    else
    {
        msg_con.innerText="You lose the Game";
        com_score_para.innerText=com_score;
    }
}



const play_game = (user_choice) => {
    console.log("User choice: ", user_choice);
    //Generate computer's choice
    const comm_choice = gen_com_choice();

    console.log("Computer choice: ", comm_choice);


    if (user_choice === comm_choice) {
        console.log("The game is draw");

        draw_game();

    } else {
        
        if ((user_choice === 'rock') && (comm_choice === 'scissors')) {
            user_score++;
            console.log('You win this round');
            
        }
        else if ((user_choice === 'rock') && (comm_choice === 'paper')) {
            com_score++;
            console.log('You lose this round');
        }
        else if ((user_choice === 'paper') && (comm_choice === 'scissors')) {
            console.log('You lose this round');
            com_score++;
        }
        else if ((user_choice === 'paper') && (comm_choice === 'rock')) {
            user_score++;
            console.log('You win this round');
        }
        else if (user_choice === 'scissors' && comm_choice === 'paper') {
            user_score++;
            console.log("You win this round");
        }
        else if (user_choice === 'scissors' && comm_choice === 'rock') {
            com_score++;
            console.log("You lose this round");
        }
    
        show_winner(user_score,com_score);

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