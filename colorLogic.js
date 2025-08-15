
        let name;
        function getvalue() {
            let name = document.querySelector('#i-1').value || 'user';
            console.log(name);
            alert("Welcome  " + name);
            document.querySelector('#wlc_msg').innerText = "Welcome " + name + " please start your game...";
        }

        let userChoice;
        let computerChoice;
        // computerChoice = Math.random() * 3;
        let storeR = {
            won: 0,
            lost: 0,
        };
        function reset_result() {
            storeR.won = 0;
            storeR.lost = 0;
            alert(` Your total score : Won ${storeR.won}, Lost ${storeR.lost} , Start new game. `);
            document.querySelector('.result-1').innerHTML = `Your total score : Won ${storeR.won}, Lost ${storeR.lost} , Start again. `;
        }
        function calculateComputerchoice() {
            if (computerChoice > 0 && computerChoice <= 1) {
                computerChoice = 'red';
                console.log(computerChoice);
                console.log("Computer has select red color.");
            }
            else if (computerChoice > 1 && computerChoice <= 2) {
                computerChoice = 'yellow';
                console.log(computerChoice);
                console.log("Computer has select yellow color.");
            }
            else if (computerChoice > 2 && computerChoice <= 3) {
                computerChoice = 'green';
                console.log(computerChoice);
                console.log("Computer has select green color.");
            }
        }
        localStorage.setItem('score', JSON.stringify(storeR));
        let result;
        function calculateResult_1() {
            if (computerChoice === 'red') {
                storeR.won = storeR.won + 1;
                result = "You have Won the game";
            }
            else {
                storeR.lost = storeR.lost + 1;
                result = "You have lost the game";
            }

        }
        function calculateResult_2() {
            if (computerChoice === 'yellow') {
                storeR.won = storeR.won + 1;
                result = "You have Won the game";
            }
            else {
                storeR.lost = storeR.lost + 1;
                result = "You have lost the game";
            }
        }
        function calculateResult_3() {
            if (computerChoice === 'green') {
                storeR.won = storeR.won + 1;
                result = "You have Won the game";
            }
            else {
                storeR.lost = storeR.lost + 1;
                result = "You have lost the game";
            }
        }
