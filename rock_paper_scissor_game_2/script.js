let you;
let yourScore = 0;
let opponent;
let opponentScore = 0;

// buat array pilihan untuk menyimpan pilihan
let choices = ["rock", "paper", "scissors"];

function selectChoice(pilihan) {
    // mengambil id dari element yang di klik
    you = pilihan;
    // dapatkan element dengan id your-choice, src nya diisi dengan 
    document.getElementById("your-choice").src = "image/" + you + ".png";
    document.getElementById("your-choice").width = "100";

    // random for opponent
    // math.floor untuk pembulatan ke bawah
    // Ini mengambil elemen dari array choices pada indeks acak yang dihasilkan oleh Math.floor(Math.random() * 3). Jadi, bisa mengambil elemen ke-0, ke-1, atau ke-2 dari array choices.
    opponent = choices[Math.floor(Math.random() * 3)];
    // dokument.dapatkanElementDenganId("") lalu attribute src nya diisi dengan
    document.getElementById("opponent-choice").src = "image/" + opponent + ".png";
    document.getElementById("opponent-choice").width = 100;


    if (you == "rock") {
        if (opponent == "scissors") {
            yourScore += 1;
        } else if (opponent == "paper") {
            opponentScore += 1;
        }
    }
    else if (you == "scissors") {
        if (opponent == "paper") {
            yourScore += 1;
        } else if (opponent == "rock") {
            opponentScore += 1;
        }
    }
    else if (you == "paper") {
        if (opponent == "rock") {
            yourScore += 1;
        } else if (opponent == "scissors") {
            opponentScore += 1;
        }
    }

    document.getElementById("your-score").innerText = yourScore;
    document.getElementById("opponent-score").innerText = opponentScore;
};