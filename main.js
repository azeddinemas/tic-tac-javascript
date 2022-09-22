var turn = 'X';

function game(id) {

    let elemen = document.getElementById(id);
    if (turn === 'X' && elemen.innerHTML == '') {
        playersName.innerHTML = (localStorage.getItem("player2") + "O");
        elemen.innerHTML = 'X';
        turn = 'O';

    } else if (turn === 'O' && elemen.innerHTML == '') {
        playersName.innerHTML = (localStorage.getItem("player1") + "X");
        elemen.innerHTML = 'O';
        turn = 'X';
    }
}

function player() {

    localStorage.setItem('player1', player1.value);
    localStorage.setItem('player2', player2.value);
    document.getElementById("subm").style.display = "none";
    playersName.innerHTML = (localStorage.getItem("player1") + "X");
    player1.disabled = true;
    player2.disabled = true;

}


function reload() {
    location.reload();
    localStorage.clear();
}