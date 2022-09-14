let bitcoinPrice=0;
let dollarsValue=0;
let canBuy=0;
bitcoinPrice=Number(prompt("What is Bitcoin price today?", [0]));
dollarsValue=Number(prompt("How much $ do you have?", [0]));
canBuy=`You can buy ${dollarsValue/bitcoinPrice} BTC`;
document.write(canBuy);
