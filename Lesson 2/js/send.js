window.onload = function () {
    // Отправка данных

    function sendDataForm() {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'validator.php', true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var result = xhr.responseText;
                result = JSON.parse(result);
                console.log(result);
            }
            xhr.ontimeout = function () {
                console.log("Время истекло");
            };
        };
        //собираем данные с полей формы
        var username = 'username=' + document.getElementById('username').value;
        var password = 'password=' + document.getElementById('password').value;
        var email = 'email=' + document.getElementById('email').value;
        var gender = 'gender=' + document.getElementById('gender').value;
        var credit_card = 'credit_card=' + document.getElementById('credit_card').value;
        var bio = 'bio=' + document.getElementById('bio').value;
        var birth = 'birth=' + document.getElementById('birth').value;

        var strRequest = username + '&' + password + '&' + email + '&' + gender + '&' + credit_card + '&' + bio + '&' + birth;
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(strRequest);
        console.log(strRequest);

    }

    // Автозаполнение полей для проверки
    function autoDataPaste() {
        username.value = 'chupakabra';
        password.value = 'chupakabra';
        email.value = 'info@chupakabra.ru';
        credit_card.value = 5105105105105100;
        bio.value = 'This is good! I think I will switch to another language';
        birth.value = '2017-05-19';
    };


    document.getElementById('sendData').addEventListener('click', sendDataForm);
    document.getElementById('validData').addEventListener('click', autoDataPaste);
};
