const transformPrice = (number) => {
  const currencySign = "$";
  try {
    let separator = ",";
    let number1 = parseInt(
      (number = Math.abs(Number(number) || 0).toFixed(0))
    ).toString();
    let number2 = number1.length > 3 ? number1.length % 3 : 0;
    return `${currencySign} ${
      (number2 ? number1.substr(0, number2) + separator : "") +
      number1.substr(number2).replace(/(\d{3})(?=\d)/g, separator)
    }`;
  } catch (error) {
    return `${currencySign} 0`;
  }
};
export default transformPrice;
