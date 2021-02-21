const apic = require('../index');

(async () => {
  //const resp = await apic.run('apic.weather.msn', {search:'Shanghai'});
  //console.log(JSON.parse(resp));

  let data = await apic.run('apic.weather.msn', { search: 'Shanghai' });
  let json = JSON.parse(data);

  console.log(`Temperature is ${json[0].current.temperature} ${json[0].location.degreetype}`)
})();
