const URL = 'https://api.adviceslip.com/advice';

const getQuote = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  // destructure
  const quote = data.slip;
  const {id, advice} = quote;
  return {
    id,
    advice
  };
};

export default getQuote;

