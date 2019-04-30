'use strict';

let btnStart = document.getElementById('start'),
  budgetValue = document.querySelector('.budget-value'),
  dayBudgetValue = document.querySelector('.daybudget-value'),
  levelValue = document.querySelector('.level-value'),
  expensValue = document.querySelector('.expenses-value'),
  optionalExpensValue = document.querySelector('.optionalexpenses-value'),
  incomeValue = document.querySelector('.income-value'),
  monthSavingsValue = document.querySelector('.monthsavings-value'),
  yearSavingsValue = document.querySelector('.yearsavings-value'),

  expensesItem = document.getElementsByClassName('expenses-item'),
  btnApproveExpenses = document.getElementsByTagName('button')[0],
  btnApproveOptional = document.getElementsByTagName('button')[1],
  btnCalc = document.getElementsByTagName('button')[2],
  inputOptional = document.querySelectorAll('.optionalexpenses-item'),
  income = document.querySelector('#income'),
  savings = document.querySelector('#savings'),
  sumValue = document.querySelector('#sum'),
  percentValue = document.querySelector('#percent'),
  year = document.querySelector('.year-value'),
  month = document.querySelector('.month-value'),
  day = document.querySelector('.day-value');

function hasDisabled(button) {
  button.setAttribute('disabled', true);
  button.style.backgroundImage = 'none';
}

function removeDisabled(button) {
  button.removeAttribute('disabled');
  button.style.backgroundImage = 'linear-gradient(336deg, #ffbd75, #ff964b), linear-gradient(#fff, #fff)';
}
hasDisabled(btnApproveExpenses);
hasDisabled(btnApproveOptional);
hasDisabled(btnCalc);

let money, time;

btnStart.addEventListener('click', function () {
  
  removeDisabled(btnApproveOptional);
  removeDisabled(btnCalc);

  time = prompt('Введите дату в формате YYYY-MM-DD', '');
  money = +prompt('Ваш бюджет на месяц?', '');

  while (isNaN(money) || money == '' || money == null) {
    money = +prompt('Ваш бюджет на месяц?', '');
  }
  appData.budget = money;
  appData.timeData = time;
  budgetValue.textContent = money.toFixed();
  year.value = new Date(Date.parse(time)).getFullYear();
  month.value = new Date(Date.parse(time)).getMonth() + 1;
  day.value = new Date(Date.parse(time)).getDate();
});

let step = 0;
for (let i = 0; i < expensesItem.length; i++) {
  
  expensesItem[i].addEventListener('change', function () {
    let item = expensesItem[i].value;

    if (item != '') {
      ++step;
    } else {
      step = step - 1;
    }
    if (step == expensesItem.length) {
      removeDisabled(btnApproveExpenses);
    } else {
      hasDisabled(btnApproveExpenses);
    }
  });
}


btnApproveExpenses.addEventListener('click', function () {
  let sum = 0;

  for (let i = 0; i < expensesItem.length; i++) {
    let article = expensesItem[i].value,
      howCost = expensesItem[++i].value;
    if ((typeof (article)) === 'string' && (typeof (article)) != null && (typeof (howCost)) != null && article != '' && howCost != '' && article.length < 50) {
      appData.expenses[article] = howCost;
      sum += +howCost;
    } else {
      i = i - 1;
    }
    expensValue.textContent = sum;
  }
});

btnApproveOptional.addEventListener('click', function () {
  for (let i = 0; i < inputOptional.length; i++) {
    let opt = inputOptional[i].value;
    appData.optionalExpenses[i] = opt;
    optionalExpensValue.textContent += appData.optionalExpenses[i] + ' ';
  }
});

btnCalc.addEventListener('click', function () {
  if (appData.budget != undefined) {
    
    appData.moneyPerDay = ((appData.budget - expensValue.textContent) / 30).toFixed();
    dayBudgetValue.textContent = appData.moneyPerDay;

    if (appData.moneyPerDay < 100) {
      levelValue.textContent = 'минимальный уровень достатка';
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      levelValue.textContent = 'средний уровень достатка';
    } else if (appData.moneyPerDay > 2000) {
      levelValue.textContent = 'высокий уровень достатка';
    } else {
      levelValue.textContent = 'Произошла ошибка';
    }
  } else {
    dayBudgetValue.textContent = 'Произошла ошибка';
  }
});

income.addEventListener('input', function () {
  let items = income.value;
  // while (typeof (items) !== 'string' || items == '' || items == null) {
  //   items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
  // }

  appData.income = items.split(', ');
  incomeValue.textContent = appData.income;
});
savings.addEventListener('click', function () {
  if (appData.savings == true) {
    appData.savings = false;
  } else {
    appData.savings = true;
  }
});

sumValue.addEventListener('input', function () {
  if (appData.savings == true) {
    let sum = +sumValue.value,
      percent = +percentValue.value;
    appData.monthIncome = sum / 100 / 12 * percent;
    appData.yearIncome = sum / 100 * percent;

    month.textContent = appData.monthIncome.toFixed(1);
    year.textContent = appData.yearIncome.toFixed(1);

  }
});

percentValue.addEventListener('input', function () {
  if (appData.savings == true) {
    let sum = +sumValue.value,
      percent = +percentValue.value;
    appData.monthIncome = sum / 100 / 12 * percent;
    appData.yearIncome = sum / 100 * percent;

    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};

for (let key in appData) {
  console.log('Наша программа включает в себя данные: ' + key);
}

//console.log(appData);