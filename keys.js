// print message to make sure this file is being referenced by the liri.js file
console.log("Start it UP");


module.exports = {
  consumer_key: 'FYh1fCBUVIfnVHW4yDS12OVJf',
  consumer_secret: 'EJRATxRnCl4obVvwRBRFPoTZYDkguhti0FIwKU8p4G3ssQp7LH',
  access_token: '154599235-aQL570x77BxRAnpqkwjsNRP75OHegqAf2H05JSKu',
  access_token_secret: 'x1Rha9Wk2E8sbNlcHfqJqEzpADRewHui14qroBc7JX8ZL'
};

var spotify = new Spotify({
  id: "7c59d07332044ed4818f2ccf5f71b74b",
  secret: "b6f31901fb5a4df3a0df2abd7e747fce"
});

console.log(spotify);