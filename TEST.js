'use strict';

let money = prompt("Ваш бюджет на месяц"),
    time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: +money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
    };

    appData.expenses.reason1 = prompt("Введите  обязательную статью расходов в этом месяце");
    appData.expenses.cost1 = +prompt("Во сколько обойдется?");

    appData.expenses.reason2 = prompt("Введите обязательную статью расходов в этом месяце");
    appData.expenses.cost2 = +prompt("Во сколько обойдется?");

    alert(`Ваш бюджет на 1 день: ${(appData.budget- appData.expenses.cost1 - appData.expenses.cost2)/30}`);

console.log(appData)

