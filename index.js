// var Promise = require('bluebird')
// var adb = require('adbkit')
// var client = adb.createClient();
// const adbd = require('node-adb-api');
// var http = require('http');
var usbDetect = require('usb-detection');


usbDetect.startMonitoring();
 
usbDetect.on('add', function(device) {
    console.log(device);
});

// // console.log(adb);

// client.listDevices()
//   .then(devices => {
//     return Promise.map(devices, device => {
//       client.shell(device.id, 'dumpsys battery | grep level')
//         // Use the readAll() utility to read all the content without
//         // having to deal with the events. `output` will be a Buffer
//         // containing all the output.
//         .then(adb.util.readAll)
//         .then(function (output) {
//           console.log('[%s] %s', device.id, output.toString().trim());
//         })
//     })
//   })
//   .then(function () {
//     console.log('Done.')
//   })
//   .catch(function (err) {
//     console.error('Something went wrong:', err.stack)
//   });


//   // client.getFeatures(device.id)
//   // .then(features => {
//   //   console.log(features);
//   //   console.log();
//   // })


// // client.trackDevices()
// //   .then(function (tracker) {
// //     tracker.on('add', function (device) {
// //       console.log('Device %s was plugged in', device.serial)
// //     })
// //     tracker.on('remove', function (device) {
// //       console.log('Device %s was unplugged', device.id)
// //     })
// //     tracker.on('end', function () {
// //       console.log('Tracking stopped')
// //     })
// //   })
// //   .catch(function (err) {
// //     console.error('Something went wrong:', err.stack)
// //   })