const apic = require('../index');

(async () => {
  // get current price
  let data = await apic.run('apic.stock.yahoo.current', {ticker:'AAPL'});
  let json = JSON.parse(data);

  console.log(`AAPL current price is ${json.currency} ${json.price}`)
  
  // get history
  data = await apic.run('apic.stock.yahoo.history', { ticker: 'AAPL' });
  json = JSON.parse(data);

  console.log(json);
})();
