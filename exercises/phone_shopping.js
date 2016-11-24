const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 12.99

var wallet = 436.89;
printWallet(wallet);

while (wallet >= 150) {
  totalPhonePrice = calculatePhonePrice(wallet)
  totalAccessoryPrice = calculateAccessoryPrice(wallet)
  wallet -= totalPhonePrice
  wallet -= totalAccessoryPrice
  printWallet(wallet);
}

console.log('Not enough money to buy more.')

function printWallet(wallet){
  console.log("Wallet Amount " + formatAmt(wallet));
}

function calculatePhonePrice(wallet) {
  tax = calculateTax(PHONE_PRICE)
  total = PHONE_PRICE + tax
  console.log("  phone -$" + String(PHONE_PRICE))
  console.log("  tax -$" + String(roundNum(tax)))
  console.log("  total purchase -$" + String(roundNum(total)))
  return total
}

function calculateAccessoryPrice(wallet) {
  tax = calculateTax(ACCESSORY_PRICE)
  total = ACCESSORY_PRICE + tax
  console.log("  accessory -$" + String(ACCESSORY_PRICE))
  console.log("  tax -$" + String(roundNum(tax)))
  console.log("  total purchase -$" + String(roundNum(total)))
  return total
}

function calculateTax(num) {
  tax = num * TAX_RATE;
  return tax;
}

function roundNum(num) {
  return num.toFixed(2);
}

function formatAmt(num) {
  round = roundNum(num)
  return "$" + String(round);
}
