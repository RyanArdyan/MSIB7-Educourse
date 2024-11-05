let you;
let yourScore = 0;
let opponent;
let opponentScore = 0;

// buat array pilihan untuk menyimpan pilihan
let choices = ["rock", "paper", "scissors"];

// jendela.ketika dimuat maka jalankan fungsi berikut
window.onload = function() {
    // ada 3 pengulangan
    for (let i = 0; i < 3; i++) {
        // buat element img
        let choice = document.createElement("img");
        // Dalam kode JavaScript tersebut, choice.id = choices[i]; adalah cara untuk memberikan setiap elemen gambar (img) ID yang unik dari array choices.
        choice.id = choices[i];
        // panggil elmement img lalu attribute src nya diisi dengan value dari array choices lalu di gabung dengan .png
        choice.src = "image/" + choices[i] + ".png";
        // panggil element id choices lalu tambahkan img dengan id dan img yang sudah dibuat
        document.getElementById("choices").append(choice);
        // dokumen.tambahAcaraPendengar("click", panggil fungsi select choice)
        choice.addEventListener("click", selectChoice);
    }
}

function selectChoice() {
    // mengambil id dari element yang di klik
    you = this.id;
    // dapatkan element dengan id your-choice, src nya diisi dengan 
    document.getElementById("your-choice").src = "image/" + you + ".png";

    // random for opponent
    // math.floor untuk pembulatan ke bawah
    // Ini mengambil elemen dari array choices pada indeks acak yang dihasilkan oleh Math.floor(Math.random() * 3). Jadi, bisa mengambil elemen ke-0, ke-1, atau ke-2 dari array choices.
    opponent = choices[Math.floor(Math.random() * 3)];
    // dokument.dapatkanElementDenganId("") lalu attribute src nya diisi dengan
    document.getElementById("opponent-choice").src = "image/" + opponent + ".png";
    
    // check for winner
    // jika you sama dengan opponent misalnya user memilih gunting lalu musuh memilih gunting maka
    if (you == opponent) {
        yourScore += 1;
        opponentScore += 1;
    } else {
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
    }

    document.getElementById("your-score").innerText = yourScore;
    document.getElementById("opponent-score").innerText = opponentScore;

    console.log(yourScore);
};