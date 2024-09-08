const start = document.getElementById("start-btn");
const WinnerDisplay = document.getElementById("winner");
const UserChoiceDisplay = document.getElementById("usr-choice");
const CompChoiceDisplay = document.getElementById("comp-choice");   
const randomValue = Math.floor(Math.random() * 3);
const choiceses = [1, 2, 3];
const randomChoice = choiceses[randomValue];
let UserChoice;
let CompChoice = Math.random();


start.addEventListener("click", function() {

    let rock = document.createElement("button");
    rock.id = "rock";
    rock.innerHTML = "rock";
    rock.addEventListener("click", function() {
        UserChoice = 1;
        UserChoiceDisplay.textContent = "user choice is rock";
        start.remove();
        rock.remove();
        paper.remove();
        saks.remove();
        console.log(randomChoice);


        if(randomChoice === UserChoice) {
            CompChoiceDisplay.textContent = "Computer choice is Rock"
            WinnerDisplay.textContent = "draw";
        }
    else if(randomChoice === 2) {
        CompChoiceDisplay.textContent = "Computer choice is paper"
    WinnerDisplay.textContent = "Computer win";
}
        else { 
            WinnerDisplay.textContent = "You Win";
            CompChoiceDisplay.textContent = "Computer choice is saks"
        }

      
        let finish = document.createElement("button");
        finish.innerHTML = "finish the game";
        document.body.appendChild(finish);
        finish.addEventListener("click", function() {
         finish.remove();
         UserChoiceDisplay.remove();
         CompChoiceDisplay.remove();
         WinnerDisplay.remove();
        });
    });


    let paper = document.createElement("button");
    paper.id = "paper";
    paper.innerHTML = "paper";
    paper.addEventListener("click", function() {
        UserChoice = 2;
        UserChoiceDisplay.textContent = "user choice is paper";
        rock.remove();
        paper.remove();
        saks.remove();
        start.remove();

        if(randomChoice === UserChoice) {
            CompChoiceDisplay.textContent = "Computer choice is Paper"
            WinnerDisplay.textContent = "draw";
        }
    else if(randomChoice === 1) {
        CompChoiceDisplay.textContent = "Computer choice is rock"
    WinnerDisplay.textContent = "You Win";
}
        else { 
            WinnerDisplay.textContent = "Computer Win";
            CompChoiceDisplay.textContent = "Computer choice is saks"
        }

        let finish = document.createElement("button");
        finish.innerHTML = "finish the game";
        document.body.appendChild(finish);
        finish.addEventListener("click", function() {
         finish.remove();
         UserChoiceDisplay.remove();
        });
    });


    let saks = document.createElement("button");
    saks.id = "saks";
    saks.innerHTML = "saks";
    saks.addEventListener("click", function() {
        UserChoice = 3;
        UserChoiceDisplay.textContent = "user choice is saks";
        rock.remove();
        paper.remove();
        saks.remove();
        start.remove();

        if(randomChoice === UserChoice) {
            CompChoiceDisplay.textContent = "Computer choice is Sask"
            WinnerDisplay.textContent = "draw";
        }
    else if(randomChoice === 1) {
        CompChoiceDisplay.textContent = "Computer choice is paper"
    WinnerDisplay.textContent = "You win";
}
        else { 
            WinnerDisplay.textContent = "Computer Win";
            CompChoiceDisplay.textContent = "Computer choice is Rock"
        }

        let finish = document.createElement("button");
        finish.innerHTML = "finish the game";
        document.body.appendChild(finish);
        finish.addEventListener("click", function() {
         finish.remove();
         UserChoiceDisplay.remove();
        });
    });

    document.body.appendChild(rock);
    document.body.appendChild(paper);
    document.body.appendChild(saks);
});






