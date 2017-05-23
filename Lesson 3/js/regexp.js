/* Homework lesson 3 */

window.onload = function () {

// Test task 1

function printResut(elem, text) {
    elem.innerHTML = 'Результат: ' + text;
    elem.style.color = 'green';
};

function printError(elem, text) {
    elem.innerHTML = 'Ошибка: ' + text;
    elem.style.color = 'red';
};

function checkColor() {
    var x = document.getElementById('userEntryColor').value;
    var result = document.getElementById('resultColor');
    var reCheck = /#([0-9a-f]{3}){1,2}\b/gi;
    if (reCheck.test(x))
        printResut(result, x);
    else
        printError(result, x);
};

// Test task 2

function checkStrNum() {
    var x = document.getElementById('userEntryStrNum').value;
    var result = document.getElementById('resultStrNum');
    var reCheck = /[^-\d\.]\d+(\.\d+)?/gi;
    var fData = x.match(reCheck).filter(function (number) {
        return number > 0;
    });
    if (fData)
        printResut(result, fData);
    else
        printError(result, 'Не найденно чисел');
};

// Test task 3

function checkTime() {
    var x = document.getElementById('userEntryTime').value;
    var result = document.getElementById('resultTime');
    var reCheck = /(([0-1][0-9])|(2[0-4]))([:-][0-6][0-9])/gi;
    var r = x.match(reCheck);
    if (r)
        printResut(result, r);
    else
        printError(result, 'Введенные данные не относятся ко времени');
};

// Test task 4

function ifSah(x) {
    var reCheck = /([a-f][1-8]){1}/i;
    if (recheck.test(x))
        return true;
    else
        return false;
};

// Test task 5

function checkTelNumber(x) {
    var reCheck = /^\+\d+\(\d+\)\-\d+\-\d+\-\d+$/;
    return reCheck.test(x);
};

function checkEmail(x) {
    var reCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return reCheck.test(x);
};

function checkPassport(x) {
    var reCheck = /^\d{4}\s\d{6}$/;
    return reCheck.test(x);
};

function changeColor(elem, callback) {
    if (callback(elem.value)) {
        elem.style.backgroundColor = 'green';
        elem.style.color = 'white';
    } else {
        elem.style.backgroundColor = 'red';
        elem.style.color = 'white';
    }
};

function checkAll() {
    var tel = document.getElementById('userTelNumber');
    var email = document.getElementById('userEmail');
    var passport = document.getElementById('checkPassport');

    changeColor(tel, checkTelNumber);
    changeColor(email, checkEmail);
    changeColor(passport, checkPassport);
};

    document.getElementById('checkColor').addEventListener('click', checkColor);
    document.getElementById('checkStrNum').addEventListener('click', checkStrNum);
    document.getElementById('checkTime').addEventListener('click', checkTime);
    document.getElementById('checkAll').addEventListener('click', checkAll);
};