// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
var app = {
  // Application Constructor
  initialize: function () {
    document.addEventListener(
      "deviceready",
      this.onDeviceReady.bind(this),
      false
    );
    $('#modal-form-subject-html').load('modal_form_top_subject.html');
    $('#modal-top-list-html').load('modal_top_list.html');
    $('#modal-welcome-html').load('modal_welcome.html');
    $('#modal-alert-network-html').load('modal_alert_network_info.html');
    $('#modal-disconnect-html').load('modal_disconnect.html');
    getTopsSubject();
  },

  // deviceready Event Handler
  //
  // Bind any cordova events here. Common events are:
  // 'pause', 'resume', etc.
  onDeviceReady: function () {
    deviceReady();
  },
};
  
app.initialize();