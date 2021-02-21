var https = require('follow-redirects').https;

module.exports = {
  run: async (endpoint, params) => {
    return new Promise((resolve, reject) => {
      var options = {
        'method': 'GET',
        'hostname': 'us.apic.run',
        'path': `/${endpoint}?${new URLSearchParams(params).toString()}`,
        'maxRedirects': 20
      };
  
      var req = https.request(options, function (res) {
        var chunks = [];
  
        res.on("data", function (chunk) {
          chunks.push(chunk);
        });
  
        res.on("end", function (chunk) {
          var body = Buffer.concat(chunks);
          resolve(body.toString());
        });
  
        res.on("error", function (error) {
          reject(error);
        });
      });
  
      req.end();
    });
  }
}