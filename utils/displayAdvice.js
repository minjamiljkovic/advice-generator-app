import get from './getElement.js';

const advice = get('.advice');
const adviceNumber = get('.advice-number');

const displayQuote= (quote) => {
  advice.textContent = quote.advice;
  adviceNumber.textContent = quote.id;
};

export default displayQuote;
