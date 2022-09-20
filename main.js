var turn = 'X';

function game(id) {

    let elemen = document.getElementById(id);

    if (turn === 'X' && elemen.innerHTML == '') {

        elemen.innerHTML = 'X';
        turn = 'X';

    }
}