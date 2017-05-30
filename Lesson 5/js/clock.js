function Clock(options) {
    var elem = options.elem;

    var timerId;

    function timer() {
        var date = new Date();

        var hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
        elem.querySelector('.hour').innerHTML = hours;

        var min = date.getMinutes();
        if (min < 10) min = '0' + min;
        elem.querySelector('.min').innerHTML = min;

        var sec = date.getSeconds();
        if (sec < 10) sec = '0' + sec;
        elem.querySelector('.sec').innerHTML = sec;
    };

    this.stop = function () {
        clearInterval(timerId);
        timerId = null;
    };

    this.start = function () {
        timer();
        if (!timerId) {
            timerId = setInterval(timer, 1000);
        }

    };

};

var pageClock = new Clock({
    elem: document.getElementById('clock')
});

function correct() {
    alert('Часы должны останавливаться во время alert,\nи продолжать корректно работать после нажатия на ОК');
};

document.getElementById('start').addEventListener('click', pageClock.start);
document.getElementById('stop').addEventListener('click', pageClock.stop);
document.getElementById('alert').addEventListener('click', correct);
