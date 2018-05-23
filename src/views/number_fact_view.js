const PubSub = require('../helpers/pub_sub.js');

const NumberFactView = function (container) {
  this.container = container;
}

NumberFactView.prototype.bindEvents = function() {
  PubSub.subscribe('NumbersData:fact-loaded', (evt)=> {
    this.container.innerHTML = "";
    const triviaFact = evt.detail;
    const divForTriviaFact = document.createElement('div');
    const numberParagraph = document.createElement('p');
    numberParagraph.textContent = `The number you picked: ${triviaFact.number}`;
    divForTriviaFact.appendChild(numberParagraph);

    const factParagraph = document.createElement('p');
    factParagraph.textContent = triviaFact.text;

    divForTriviaFact.appendChild(factParagraph);
    this.container.appendChild(divForTriviaFact);
  });
}

module.exports = NumberFactView;
