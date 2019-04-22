'use strict';

let money = +prompt('Ваш бюджет на месяц?'),
    time = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
  budget: money,
  timeData: time,
  expenses : {},
  optionalExpenses: {},
  income: [],
  savings: false
};    

appData.expenses[howCostOne] = howCostTwo;
for (let i = 0; i < 2; i++) {
  let article = prompt('Введите обязательную статью расходов в этом месяце?'),
      howCost = prompt('Во сколько обойдется?', article);
  if ( (typeof(article)) === 'string' && (typeof(article)) != null && (typeof(howCost)) != null && article != '' && howCost != '' && article.length < 50) {
    appData.expenses[article] = howCost;
  } else {
    i = i - 1;
  }
  // if ( (typeof(article)) === 'string' && article != null && howCost != null && article != '' && howCost != '' && article.length < 50) {
  //   appData.expenses[article] = howCost;
  // } else {
  //   i = i - 1;
  // }
}

//  let i = 0;
//  while (i < 2) {
//   let article = prompt('Введите обязательную статью расходов в этом месяце?'),
//       howCost = prompt('Во сколько обойдется?', article);

//   if ( (typeof(article)) === 'string' && article != null && howCost != null && article != '' && howCost != '' && article.length < 50) {
//     appData.expenses[article] = howCost;
//   } else {
//     i = i - 1;
//   }
//  i++;
// }

// do {
//   let article = prompt('Введите обязательную статью расходов в этом месяце?'),
//       howCost = prompt('Во сколько обойдется?', article);

//   if ( (typeof(article)) === 'string' && article != null && howCost != null && article != '' && howCost != '' && article.length < 50) {
//     appData.expenses[article] = howCost;
//   } else {
//     //i = i - 1;
//   }
//   i++;
// }
// while (i < 2);
console.log(appData);
const str = 'Ваш бюджет в день cоставит: ';
let budgetPerDay = Math.round((money / 30), 0), //budgetPerDay.toFixed(); округляет до целого
    inform = str + ' ' + budgetPerDay;

appData.moneyPerDay = appData.budget / 30;
alert(str + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
  console.log('минимальный уровень достатка');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log('средний уровень достатка');
} else if (appData.moneyPerDay > 2000) {
  console.log('высокий уровень достатка');
} else {
  console.log('Произошла ошибка');

}