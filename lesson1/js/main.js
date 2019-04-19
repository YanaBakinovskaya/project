'use strict';

let money = prompt('Ваш бюджет на месяц?'),
    time = prompt('Введите дату в формате YYYY-MM-DD');

let articleOne = prompt('Введите обязательную статью расходов в этом месяце?'),
    articleTwo = prompt('Введите обязательную статью расходов в этом месяце?'),
    howCostOne = prompt('Во сколько обойдется?', articleOne),
    howCostTwo = prompt('Во сколько обойдется?', articleTwo);

let appData = {
  expenses : {},
  optionalExpenses: {},
  income: [],
  savings: false
};
appData.budget = money;
appData.timeData = time;
//let expenses = {};
//expenses[howCostOne] = howCostTwo;
//appData.expenses[articleOne] = howCostOne;
//appData.expenses[articleTwo] = howCostTwo;
appData.expenses[howCostOne] = howCostTwo;
console.log(appData.expenses);
console.log(appData);
const str = 'Ваш бюджет в день cоставит:';
let budgetPerDay = Math.round(((money - howCostOne - howCostTwo) / 30), 0),
    inform = str + ' ' + budgetPerDay;
console.log(budgetPerDay);
alert(inform);
