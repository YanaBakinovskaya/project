'use strict';

let money, time;

function start() {
  money = +prompt('Ваш бюджет на месяц?', '');
  time = prompt('Введите дату в формате YYYY-MM-DD', '');

  while(isNaN(money) || money == '' || money == null) {
    money = +prompt('Ваш бюджет на месяц?', '');
  }
}

start();

let appData = {
  budget: money,
  timeData: time,
  expenses : {},
  optionalExpenses: {},
  income: [],
  savings: true
};    

function chooseExpenses() {
  for (let i = 0; i < 2; i++) {
    let article = prompt('Введите обязательную статью расходов в этом месяце?', ''),
        howCost = +prompt('Во сколько обойдется?', article);
    if ( (typeof(article)) === 'string' && (typeof(article)) != null && (typeof(howCost)) != null && article != '' && howCost != '' && article.length < 50) {
      appData.expenses[article] = howCost;
    } else {
      i = i - 1;
    }
  }
}

chooseExpenses();

console.log(appData);

const str = 'Ваш бюджет в день cоставит: ';
let budgetPerDay, inform;

function detectDayBudget() {
  budgetPerDay = Math.round((money / 30), 0);
  //budgetPerDay.toFixed(); округляет до целого
  inform = str + ' ' + budgetPerDay;

  appData.moneyPerDay = appData.budget / 30;
  alert(str + appData.moneyPerDay);
}

detectDayBudget();

function detectLevel() {
  if (appData.moneyPerDay < 100) {
    console.log('минимальный уровень достатка');
  } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('средний уровень достатка');
  } else if (appData.moneyPerDay > 2000) {
    console.log('высокий уровень достатка');
  } else {
    console.log('Произошла ошибка');
  }
}

detectLevel();

function checkSavings() {
  if (appData.savings == true) {
    let save = +prompt('Какая сумма накоплений?'),
        percent = +prompt('Под какой процент?');
    appData.monthIncome = save / 100 / 12 * percent;
    alert('Доход в месяц с Вашего депозита: ' + appData.monthIncome)    ;
  }
}
checkSavings();

function chooseOptExpenses() {
  for (let i = 1; i < 4; i++) {
    let article = prompt('Введите необязательную статью расходов в этом месяце?', ''),
        howCost = +prompt('Во сколько обойдется?', article);
    if ( (typeof(article)) === 'string' && (typeof(article)) != null && (typeof(howCost)) != null && article != '' && howCost != '' && article.length < 50) {
      appData.expenses[i] = howCost;
    } else {
      i = i - 1;
    }
  }
}

chooseOptExpenses();