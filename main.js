var html = document.querySelector("#root");
var uAgent = window.navigator.userAgent || "";

function detectCountry() {
  var xmlhttp = new XMLHttpRequest();
  var url = "http://ip-api.com/json";
  var country;
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      country = JSON.parse(this.responseText).country;
      insertResult(country);
    }
  };
}

function detectBrowser() {
  var browser = {
    ie8: /trident\/4.0/i.test(uAgent),
    ie9: /trident\/5.0/i.test(uAgent),
    ie10: /trident\/6.0/i.test(uAgent),
    ie11: /trident\/7.0/i.test(uAgent),
    edge: /edge/i.test(uAgent),
    opera: /opr/i.test(uAgent),
    yandex: /yabrowser/i.test(uAgent),
    firefox: /firefox/i.test(uAgent),
    chrome: /chrome/i.test(uAgent) && !/yabrowser/i.test(uAgent) && !/edge/i.test(uAgent) && !/opr/i.test(uAgent),
    safari: !/chrome/i.test(uAgent) && /webkit|safari|khtml/i.test(uAgent)
  };
  var detectedBrowser = searchElem(browser);
  insertResult(detectedBrowser);
}

function detectSystem() {
  var system = {
    ios: /ipad|ipod|iphone/i.test(uAgent),
    android: /android/i.test(uAgent),
    linux: /linux/i.test(uAgent) && !/android/i.test(uAgent),
    windows_xp: /Windows (?:NT 5\.2|NT 5\.1)/i.test(uAgent),
    windows_vista: /(Windows NT 6\.0)/i.test(uAgent),
    windows_7: /(Windows NT 6\.1)/i.test(uAgent),
    windows_8: /(Windows NT 6\.2)/i.test(uAgent),
    windows_10: /(Windows NT 10\.0)/i.test(uAgent),
    macOs: /mac/i.test(uAgent) && !/ipad|ipod|iphone/i.test(uAgent)
  };
  var detectedSystem = searchElem(system);
  insertResult(detectedSystem);
}

function detectLanguage() {
  var language = navigator.languages ? navigator.languages[0] : navigator.language || navigator.userLanguage;
  insertResult(language);
}

function searchElem(obj) {
  for (prop in obj) {
    if (obj[prop] === true) {
      return prop;
    }
  }
}

function insertResult(result) {
  html.innerHTML += "<li>" + result + "</li>";
}

detectCountry();
detectSystem();
detectBrowser();
detectLanguage();
