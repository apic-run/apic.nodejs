# apic.run
This is a node.js module for accessing apic.run.

## Usage

## Samples

### Get weather data from weather.service.msn.com
```javascript
let data = await apic.run('apic.weather.msn', { search: 'Shanghai' });
let json = JSON.parse(data);

console.log(`Temperature is ${json[0].current.temperature} ${json[0].location.degreetype}`);
```

### Get stock data from yahoo finance api
```javascript
// get current price
let data = await apic.run('apic.stock.yahoo.current', { ticker: 'AAPL' });
let json = JSON.parse(data);

console.log(`AAPL current price is ${json.currency} ${json.price}`);

// get history
data = await apic.run('apic.stock.yahoo.history', { ticker: 'AAPL' });
json = JSON.parse(data);

console.log(json);
```

## License

(The MIT License)

Copyright (c) 2021 Ray Ling &lt;ray58750034@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.