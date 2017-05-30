function Voter(options) {
    var elem = options.elem;

    var voteElem = elem.querySelector('.vote');

    elem.onclick = function (event) {
        if (event.target.closest('.down')) {
            voteDecrease();
        } else if (event.target.closest('.up')) {
            voteIncrease();
        }
    };

    elem.onmousedown = function () {
        return false;
    };

    /* ----------- Методы ------------- */

    function voteDecrease() {
        voteElem.innerHTML = +voteElem.innerHTML - 1;
    };

    function voteIncrease() {
        voteElem.innerHTML = +voteElem.innerHTML + 1;
    };

    this.setVote = function (vote) {
        voteElem.innerHTML = +vote;
    };

};

var voting = new Voter({
    elem: document.getElementById('voting')
});

voting.setVote(1);
