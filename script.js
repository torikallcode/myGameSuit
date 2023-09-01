//mengambil pilihan player
let gunting = document.querySelector("#gunting");
let batu = document.querySelector("#batu");
let kertas = document.querySelector("#kertas");
let player = document.querySelector(".tanyaPlayer");
let computer = document.querySelector(".tanyaComputer");
let tulisan = document.querySelector("#tulisan");
let skor = document.querySelector(".skor");
let modal = document.querySelector("#modalBox");
let btn = document.querySelector("#btn");
let overlay = document.querySelector("#overlay")
let count = 0;

const openModal = function(){
    modal.classList.toggle("hidden")
    overlay.classList.toggle("hidden")
}

btn.addEventListener("click", openModal)

function updateSkor(){
    skor.textContent = count;
}

function oriText(){
    player.textContent = "?";
    computer.textContent = "?";
}

gunting.addEventListener("click", function(){
    player.textContent = "✌️"
    player.style.fontSize = "90px"
    computer.textContent = "✊"
    computer.style.fontSize = "80px"
    tulisan.innerHTML = "Semangattt!! <br> Ayoo coba lagi"
    count++;
    if (count >= 5){
        count = 0;
        openModal();
        oriText();
        tulisan.innerHTML = "Ayoo menangkan 5 suit untuk <br> memenangkan permainan ini!"
    }
    updateSkor();
})
batu.addEventListener("click", function(){
    player.textContent = "✊"
    player.style.fontSize = "80px"
    computer.textContent = "🤚"
    computer.style.fontSize = "90px"
    tulisan.innerHTML = "Semangattt!! <br> Ayoo coba lagi"
    count++;
    if (count >= 5){
        count = 0;
        openModal();
        oriText();
        tulisan.innerHTML = "Ayoo menangkan 5 suit untuk <br> memenangkan permainan ini!"
    }
    updateSkor();
})
kertas.addEventListener("click", function(){
    player.textContent = "🤚"
    player.style.fontSize = "90px"
    computer.textContent = "✌️"
    computer.style.fontSize = "90px"
    tulisan.innerHTML = "Semangattt!! <br> Ayoo coba lagi"
    count++;
    if (count >= 5){
        count = 0;
        openModal();
        oriText();
        tulisan.innerHTML = "Ayoo menangkan 5 suit untuk <br> memenangkan permainan ini!"
    }
    updateSkor();
})


