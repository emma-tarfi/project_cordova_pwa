//Open image's link
const openInAppBrowserOptions = "location=yes";

const openInAppBrowser = (link) => {
  cordova.InAppBrowser.open(link, "_blank", openInAppBrowserOptions);
  $('#modal-list-top').modal('hide');
};

//Alert battery low
function onBatteryLow(status) {
  alert("Battery Level Low " + status.level + "%");
}

//Alert battery critical
function onBatteryCritical(status) {
  alert("Battery Level Critical " + status.level + "%\nRecharge Soon!");
}

//Alert battery status
function onBatteryStatus(status) {
  alert("Battery Level " + status.level + "%");
}

const deviceReady = () => {
  window.addEventListener("batterylow", onBatteryLow, false);
  window.addEventListener("batterycritical", onBatteryCritical, false);
  window.addEventListener("batterystatus", onBatteryStatus, false);
};
