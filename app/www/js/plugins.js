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

//Alert information connection
function checkConnection() {
  var networkState = navigator.connection.type;

  var states = {};
  states[Connection.UNKNOWN]	= 'Unknown connection (Tu n\'es pas sur mobile ! Ouvre l\'app sur ton tel pour connaître l\'info de ta connexion.)';
  states[Connection.ETHERNET]	= 'Ethernet connection';
  states[Connection.WIFI]   	= 'WiFi connection';
  states[Connection.CELL_2G]	= 'Cell 2G connection';
  states[Connection.CELL_3G]	= 'Cell 3G connection';
  states[Connection.CELL_4G]	= 'Cell 4G connection';
  states[Connection.NONE]   	= 'No network connection';

    $('#modal-alert-network .toast-body').html('Type: ' + states[networkState]);
    $('#modal-alert-network').toast('show');
}

const deviceReady = () => {
  //Allow user to rotate screen
  window.screen.orientation.unlock();
  window.addEventListener("batterylow", onBatteryLow, false);
  window.addEventListener("batterycritical", onBatteryCritical, false);
  window.addEventListener("batterystatus", onBatteryStatus, false);
  document.addEventListener("offline", checkConnection, false);
  document.addEventListener("online", checkConnection, false);
  checkConnection();
};
