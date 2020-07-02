const formatValue = (value: number): string =>
  new Intl.NumberFormat('de-AT', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

export default formatValue;
