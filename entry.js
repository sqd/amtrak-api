var fs = require('fs')
var Helper = require('./Helper')

var __$_s1 = Helper.__$_s1
__$_s1._$_s = '9a3686ac'
__$_s1._$_i = 'c6eb2f7f5c4740c1a2f708fefd947d39'
var __$$_jmd = "69af143c-e8cf-47f8-bf09-fc1f61e5cc33"

// Station
var x12 = (fs.readFileSync('trainStations')+'').trim()
var stations = (JSON.parse(__$_s1._$_dcrt(x12.substring(0, x12.length - 88), __$_s1._$_dcrt(x12.substr(x12.length - 88), __$$_jmd).split("|")[0])).StationsDataResponse)
console.log('stations')
console.log(stations)

// Trains

var dd = (fs.readFileSync('trains')+'').trim()
var json = (JSON.parse(__$_s1._$_dcrt(dd.substring(0, dd.length - 88), __$_s1._$_dcrt(dd.substr(dd.length - 88), __$$_jmd).split("|")[0])))
console.log('trains')
console.log(json.TrainsDataResponse)
fs.writeFileSync('trains.json', JSON.stringify(json))