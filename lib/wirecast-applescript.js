const applescript = require('applescript');

// Start/Stop recording
var StartRecord = 'tell application "Wirecast"\n set myDoc to last document\n start recording myDoc\nend tell';
var StopRecord = 'tell application "Wirecast"\n set myDoc to last document\n stop recording myDoc\nend tell';
exports.wirecastStartRecord = function() {
  applescript.execString(StartRecord);
};
exports.wirecastStopRecord = function() {
  applescript.execString(StopRecord);
};
