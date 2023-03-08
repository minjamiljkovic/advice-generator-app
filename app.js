import get from './utils/getElement.js';
import getQuote from './utils/fetchAdvice.js'
import displayQuote from './utils/displayAdvice.js';
const btn = get('.btn');
// const dice = get('.dice');

const showQuote = async() =>{
//get quote from api
const quote = await getQuote();
//display quote
displayQuote(quote);
}
window.addEventListener('DOMContentLoaded', showQuote);
btn.addEventListener('click', showQuote);
// dice.addEventListener('click', showQuote);
