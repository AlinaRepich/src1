/*let apples='2';
let oranges='3';

alert(+ apples + + oranges);*/

/*let counter=2;
counter--;
alert(counter);*/

/*let result = 5 > 4;
alert(result);*/

/*let year = prompt('В каком году наступил Ковид?');

if (year<2020){
    alert ('Рановато');
} else if (year>2020){
    alert ('Многовато, сейчас всего-то 2022 год');
} else {
    alert ('Всё правильно!');
}*/


/*if (1||0){
    alert('Truthy!');
}*/

/*et hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend){
    alert ('Офис закрыт(');
}*/

/*let currentUser = null;
let defaultUser = undefined; 
let name = currentUser || defaultUser || 'unnamed';

alert (name);*/

/*let hour = 12;
let minute = 30;

if (hour==12 && minute==30){
    alert('The time is 12:30!');
}

if (1 && 0){
    alert('Результат будет ложный');
}*/

/*let age = 65;

if ( age < 14 && age > 90 ){
    alert('Всё правильно!');
}*/


//Проверка логина и пароля

let userName = prompt('Кто там?');
if (userName = 'Админ') {
    let pass = prompt('Пароль?');
    if (pass == 'Я главный') {
        alert('Здравствуйте!');
    } else if (pass == '' || pass == null) {
        alert('Отменено');
    } else {
        alert('Неверный пароль');
    }
} else if (userName == '' || userName == null) {
    alert('Отменено');
} else {
    alert('Я вас не знаю');
}



