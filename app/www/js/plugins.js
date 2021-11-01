//Open image's link
const openInAppBrowserOptions = "location=yes,zoom=false";

const openInAppBrowser = (link) => {
  cordova.InAppBrowser.open(link, "_system", openInAppBrowserOptions);//blank
};