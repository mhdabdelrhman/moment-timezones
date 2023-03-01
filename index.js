const moment = require('moment-timezone');
const fs = require('fs');
const timeZones = moment.tz.names();
var offsetTmz=[];

for(var i in timeZones)
{
    offsetTmz.push("(GMT"+moment.tz(timeZones[i]).format('Z')+") " + timeZones[i]);
}

console.log(offsetTmz);

fs.writeFileSync("time-zones.json",JSON.stringify(offsetTmz))