let bitcoinPrice=0;
let dollarsValue=0;
let canBuy=0;
bitcoinPrice=prompt("What is Bitcoin price today?", [0]);
dollarsValue=prompt("How much $ do you have?", [0]);
console.log(`You can buy ${dollarsValue/bitcoinPrice} BTC`)
