const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const NumbersData = function() {

}

NumbersData.prototype.bindEvents = function() {
  PubSub.subscribe('NumberFormView:submit', (evt) => {
    const number = evt.detail;

    if (number !== "") {
      const request = new Request(`http://numbersapi.com/${number}?json`);
      request.get((data) => {
        const triviaFact = data;
        PubSub.publish('NumbersData:fact-loaded', triviaFact);

      });
    }



  });
};

module.exports = NumbersData;
