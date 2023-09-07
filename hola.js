var barcodeDemo = {}; barcodeDemo.barcodeObjects = null; barcodeDemo.done =
false; var scannerArray=[]; var done = false; var scanner; var radio_home =
document.getElementById("radio_home"); function hide() {
document.getElementById('choose').style.visibility = 'hidden';
document.getElementById('Scanners').style.visibility = 'hidden';
document.getElementById('enable').style.visibility = 'hidden';
document.getElementById('enable2').style.visibility = 'hidden';
document.getElementById('start').style.visibility = 'hidden';
document.getElementById('start2').style.visibility = 'hidden';
document.getElementById('stop').style.visibility = 'hidden';
document.getElementById('stop2').style.visibility = 'hidden';
document.getElementById('data').style.visibility = 'hidden';
document.getElementById('disable').style.visibility = 'hidden';
document.getElementById('disable2').style.visibility = 'hidden';
document.getElementById('quit').style.visibility = 'hidden';
document.getElementById('quit2').style.visibility = 'hidden';
document.getElementById('restart').style.visibility = 'hidden';
document.getElementById('property').style.visibility = 'hidden'; } function
enumerate() { scannerArray = EB.Barcode.enumerate(); if (scannerArray.length ==
0) { alert("No SCanners Found"); } if (done == false) { for (count = 0; count <
scannerArray.length; count++) { var yes_button =
makeRadioButton(scannerArray[count].friendlyName, count);
radio_home.appendChild(yes_button); } } done = true;
document.getElementById('Scanners').style.visibility = 'visible'; } function
btnSearch_Click() { document.getElementById('enable').style.visibility =
'visible'; document.getElementById('enable2').style.visibility = 'visible'; }
function enableCommonAPI() { if (document.getElementById('b0').checked == true)
{ scanner = scannerArray[0]; } else if (document.getElementById('b1').checked ==
true) { scanner = scannerArray[1]; } else if
(document.getElementById('b2').checked == true) { scanner = scannerArray[2]; }
scanner.enable({}, callback); document.getElementById('start').style.visibility
= 'visible'; document.getElementById('start2').style.visibility = 'visible'; }
function enableWithoutCallback() { if (document.getElementById('b0').checked ==
true) { scanner = scannerArray[0]; } else if
(document.getElementById('b1').checked == true) { scanner = scannerArray[1]; }
else if (document.getElementById('b2').checked == true) { scanner =
scannerArray[2]; } scanner.enable(); } function disableCommonAPI() {
scanner.disable(); document.getElementById('quit').style.visibility = 'visible';
document.getElementById('quit2').style.visibility = 'visible'; } function
startScanner() { scanner.start();
document.getElementById('data').style.visibility = 'visible';
document.getElementById('stop').style.visibility = 'visible';
document.getElementById('stop2').style.visibility = 'visible';
document.getElementById('restart').style.visibility = 'visible';
document.getElementById('disable').style.visibility = 'visible';
document.getElementById('disable2').style.visibility = 'visible'; } function
stopScanner() { scanner.stop(); document.getElementById('quit').style.visibility
= 'visible'; document.getElementById('quit2').style.visibility = 'visible'; }
function callback(dat) { document.getElementById("display").value = dat.data; };
function quit() { EB.Application.quit(); } var radio_home =
document.getElementById("radio_home"); function makeRadioButton(name, count) {
var label = document.createElement("label"); var radio =
document.createElement("input"); var br = document.createElement("br");
radio.onclick = btnSearch_Click; radio.type = "radio"; radio.name = "Scanner";
radio.id = "b" + count; radio.value = name; label.appendChild(radio);
label.appendChild(document.createTextNode(name)); label.appendChild(br); return
label; } function handleClick(property) { alert("Property for " + property.value
+ "=" + property.checked + " has successfuly applied"); if (property.value ==
"autoenter") { if (property.checked == true) scanner.setProperty("autoenter",
"true"); else scanner.setProperty("autoenter", "false"); } else if
(property.value == "autotab") { if (property.checked == true)
scanner.setProperty("autotab", "true"); else scanner.setProperty("autotab",
"false"); } else if (property.value == "allDecoders") { if (property.checked ==
true) scanner.setProperty("allDecoders", "true"); else
scanner.setProperty("allDecoders", "false"); } enableWithoutCallback(); }
