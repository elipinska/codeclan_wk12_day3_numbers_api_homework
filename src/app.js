const NumberFormView = require('./views/number_form_view');
const NumbersData = require('./models/numbers_data');
const NumberFactView = require('./views/number_fact_view');

document.addEventListener('DOMContentLoaded', () => {
  const numberForm = document.querySelector('form#number-form');
  const numberFormView = new NumberFormView(numberForm);
  numberFormView.bindEvents();

  const numbersData = new NumbersData();
  numbersData.bindEvents();

  const factContainer = document.querySelector('section#number-fact');
  const numberFactView = new NumberFactView(factContainer);
  numberFactView.bindEvents();
});
