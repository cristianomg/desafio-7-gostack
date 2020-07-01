const formatValue = (value: string): string =>
  `R$ ${parseFloat(value).toFixed(2).replace('.', ',')}`;

export default formatValue;
