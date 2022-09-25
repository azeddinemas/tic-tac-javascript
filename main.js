var turn = 'X';

function game(id) {

    let elemen = document.getElementById(id);
    if (turn === 'X' && elemen.innerHTML == '') {
        localStorage.setItem(id, turn)
        winner();
        playersName.innerHTML = (localStorage.getItem("player2") + " " + "O");
        elemen.innerHTML = 'X';
        turn = 'O';


    } else if (turn === 'O' && elemen.innerHTML == '') {
        localStorage.setItem(id, turn)
        winner();
        playersName.innerHTML = (localStorage.getItem("player1") + " " + "X");
        elemen.innerHTML = 'O';
        turn = 'X';
    }
}

function player() {
    let player1 = document.getElementById('player1');
    let player2 = document.getElementById('player2');
    localStorage.setItem('player1', player1.value);
    localStorage.setItem('player2', player2.value);
    document.getElementById("subm").style.display = "none";
    playersName.innerHTML = (localStorage.getItem("player1") + " " + "X");
    player1.disabled = true;
    player2.disabled = true;

}

function winner() {
    let a = localStorage.getItem('0');
    let b = localStorage.getItem('1');
    let c = localStorage.getItem('2');
    let d = localStorage.getItem('3');
    let e = localStorage.getItem('4');
    let f = localStorage.getItem('5');
    let g = localStorage.getItem('6');
    let h = localStorage.getItem('7');
    let i = localStorage.getItem('8');
    if (a == 'X' && b == 'X' && c == 'X' || a == 'X' && d == 'X' && g == 'X' || a == 'X' && e == 'X' && i == 'X' || b == 'X' && e == 'X' && h == 'X' || c == 'X' && f == 'X' && i == 'X' || c == 'X' && e == 'X' && g == 'X' || d == "X" && e == "X" && f == "X" || g == "X" && h == "X" && i == "X") {
        win();
        setTimeout(alert('X is winner'));
    } else if (a == 'O' && b == 'O' && c == 'O' || a == 'O' && d == 'O' && g == 'O' || a == 'O' && e == 'O' && i == 'O' || b == 'O' && e == 'O' && h == 'O' || c == 'O' && f == 'O' && i == 'O' || c == 'O' && e == 'O' && g == 'O' || d == "O" && e == "O" && f == "O" || g == "O" && h == "O" && i == "O") {
        win();
        setTimeout(alert('O is winner'));
    }
}

function reload() {
    location.reload();
    localStorage.clear();
}

function win() {
    let a = localStorage.getItem('0');
    let b = localStorage.getItem('1');
    let c = localStorage.getItem('2');
    let d = localStorage.getItem('3');
    let e = localStorage.getItem('4');
    let f = localStorage.getItem('5');
    let g = localStorage.getItem('6');
    let h = localStorage.getItem('7');
    let i = localStorage.getItem('8');
    if (a == 'X' && b == 'X' && c == 'X' || a == 'O' && b == 'O' && c == 'O') {
        cell = document.querySelectorAll(".r1")
        cell.forEach(element => {
            element.style.backgroundColor = "#F87474"
        });
    } else if (d == 'X' && e == 'X' && f == 'X' || d == 'O' && e == 'O' && f == 'O') {
        cell = document.querySelectorAll(".r2")
        cell.forEach(element => {
            element.style.backgroundColor = "#F87474"
        });
    } else if (g == 'X' && h == 'X' && i == 'X' || g == 'O' && h == 'O' && i == 'O') {
        cell = document.querySelectorAll(".r3");
        cell.forEach(element => {
            element.style.backgroundColor = "#F87474"
        });
    } else if (a == 'X' && d == 'X' && g == 'X' || a == 'O' && d == 'O' && g == 'O') {
        cell = document.querySelectorAll(".c1");
        cell.forEach(element => {
            element.style.backgroundColor = "#F87474"
        });
    } else if (b == 'X' && e == 'X' && h == 'X' || b == 'O' && e == 'O' && h == 'O') {
        cell = document.querySelectorAll(".c2");
        cell.forEach(element => {
            element.style.backgroundColor = "#F87474"
        });
    } else if (c == 'X' && f == 'X' && i == 'X' || c == 'O' && f == 'O' && i == 'O') {
        cell = document.querySelectorAll(".c3");
        cell.forEach(element => {
            element.style.backgroundColor = "#F87474"
        });
    }
}