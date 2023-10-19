export function currencyFormatter(number: number) {
  if (number) {
    let currency = number.toFixed(2).toString().replace(/[\D]+/g, '');
    currency = currency.replace(/([0-9]{2})$/g, ',$1');
    if (currency.length > 6) {
      currency = currency.replace(/([0-9]{3}),([0-9]{2}$)/g, '.$1,$2');
    }

    return 'R$ ' + currency;
  }

  return 'R$ 0,00';
}
