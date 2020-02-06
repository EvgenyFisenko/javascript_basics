'use strict';

/*
1. Объясните почему код даёт именно такие результаты?

let a = 1, b = 1, c, d;
c = ++a;
alert(c); // ответ: 2, тк a равное 1 увеличивается на 1 и записывается в с


//пример 2
d = b++;
alert(d); //ответ: 1, тк b равное 1 сначала записывается в d, а потом увеличивается на 1

//пример 3
c = 2 + ++a;
alert(c); //ответ: 5, тк a равное 2 увеличивается на 1 и складывается с 2кой

//пример 4
d = 2 + b++;
alert(d); //ответ: 4, тк b равное 2 сначала складывается с 2кой и записывается в d, а потом увеличивается на 1

alert(a); //3, тк к этому моменту a = 3

alert(b); //3, тк к этому моменту b = 3


2. Чему будут равны переменные x и a в примере ниже? Написать почему так произошло.

let a = 2;
let x = 1 + (a *= 2); //ответ: 5; в а записывается 2, в а записывается 4, к а прибаляется 1 и записыватся в х

*/

/*
3. Объявить две переменные a и b и задать им целочисленные произвольные начальные
значения.
Затем написать скрипт, который работает по следующему принципу:
- если a и b положительные, вывести их разность (ноль можно считать положительным числом);
- если а и b отрицательные, вывести их произведение;
- * (этот пункт по сложнее, делайте по желанию) если а и b разных знаков, вывести их сумму;
 */

let a = -5;
let b = 4;

if (a >= 0 && b >= 0) {
    alert(a - b)
}
if (a < 0 && b < 0) {
    alert(a * b)
}
if ((a < 0 && b >= 0) || (a >= 0 && b < 0) ) {
    alert(a + b)
}


/*
4. Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумяпараметрами.
Т.е. например, функция для сложения должна принимать два числа, складывать их и возвращать результат.
Обязательно использовать оператор return.
 */

function addition_calc(first_num, second_num) {
    return (first_num + second_num)
}

function subtraction_calc(first_num, second_num) {
    return (first_num - second_num)
}

function multiplication_calc(first_num, second_num) {
    return (first_num * second_num)
}

function division_calc(first_num, second_num) {
    return (first_num / second_num)
}


/*
5. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
переданного значения операции (использовать switch) выполнить одну из арифметических операций
(использовать функции из задания 4) и вернуть полученное значение.
 */

function mathOperation(arg1, arg2, operation) {
    switch(operation) {
        case "addition":
            return(addition_calc(arg1,arg2));
        case "subtraction":
            return(subtraction_calc(arg1,arg2));
        case "multiplication":
            return(multiplication_calc(arg1,arg2));
        case "division":
            return(division_calc(arg1,arg2));
        default:
            return("Incorrect data received");
    }
}

let add = mathOperation(5,5,"addition");
let sub = mathOperation(12,1,"subtraction");
let mul = mathOperation(6,2,"multiplication");
let div = mathOperation(130,10,"division");
let err = mathOperation("err","err","err");

console.log(add, sub, mul, div, err);

/*
*. (Сложное задание, требует времени и возможно гугления, делайте по желанию.)
Программа должна спросить у пользователя число, это будет количество денег, которое он хочет
положить на счет в банке. Затем программа должна выдать примерно такое сообщение:
"Ваша сумма в 101 рубль успешно зачислена." - в случае если пользователь ввел 101.
"Ваша сумма в 10020 рублей успешно зачислена." - в случае если пользователь ввел 10020.
"Ваша сумма в 120104 рубля успешно зачислена." - в случае если пользователь ввел 120104.
То есть ваша задача выводить слово «рубль» в правильном падеже, в зависимости от введенного
числа.
 */

function replenish_acc() {
    let num = Number(prompt('Введите сумму'));
    let num_mod10 = num % 10;
    let num_mod100 = num % 100;
    let rubles_str = '';

    if (num_mod100 > 10  &&  num_mod100 < 20) {
        rubles_str ='рублей';
    }
    else if (num_mod10 === 1){
        rubles_str ='рубль';
    }
    else if (num_mod10 > 1 && num_mod10 < 5){
        rubles_str ='рубля';
    }
    else {
        rubles_str ='рублей';
    }
    alert(`Ваша сумма в ${num} ${rubles_str} успешно зачислена.`)
}

replenish_acc();
