export const barcodeDemo = {};
barcodeDemo.barcodeObjects = null;
barcodeDemo.selectedBarcodeIndex = null;
barcodeDemo.done = false;

barcodeDemo.enumerate = function () {
  document.querySelector("#barcode-message").classList.remove("visible-block");
  document
    .querySelector("#barcode-object-table")
    .classList.add("visible-block");

  EB.Barcode.enumerate(barcodeDemo.enumerateEvent);
};

barcodeDemo.enumerateEvent = function (barcodeObjects) {
  if (!barcodeDemo.done) {
    barcodeDemo.barcodeObjects = barcodeObjects;
    for (var i = 0; i < barcodeObjects.length; i++) {
      barcodeDemo.createTableColumnBarcodeObj(barcodeObjects[i], i);
    }
    barcodeDemo.done = true;
    barcodeDemo.changeStatus("Barcode Objects Enumerated");
  }
};

barcodeDemo.enable = function () {
  var barcodeToEnable =
    barcodeDemo.barcodeObjects[barcodeDemo.selectedBarcodeIndex];
  barcodeToEnable.enable(
    {
      //Default Options
    },
    barcodeDemo.decodeEvent
  );
  barcodeDemo.toggleActiveBarcodeButtons(true, true);
  barcodeDemo.changeStatus("Barcode Object Enabled");
};

barcodeDemo.disable = function () {
  var barcodeToDisable =
    barcodeDemo.barcodeObjects[barcodeDemo.selectedBarcodeIndex];
  barcodeToDisable.disable();
  barcodeDemo.toggleActiveBarcodeButtons(true, false);
  barcodeDemo.changeStatus("Barcode Object Disabled");
};

barcodeDemo.start = function () {
  var barcodeToStart =
    barcodeDemo.barcodeObjects[barcodeDemo.selectedBarcodeIndex];
  barcodeToStart.triggerType = EB.Barcode.SOFT_ONCE;
  barcodeToStart.start();
  barcodeDemo.changeStatus("Barcode Scanning Started");
};

barcodeDemo.stop = function () {
  var barcodeToStop =
    barcodeDemo.barcodeObjects[barcodeDemo.selectedBarcodeIndex];
  barcodeToStop.stop();
  barcodeDemo.changeStatus("Barcode Scanning Stopped");
};

barcodeDemo.decodeEvent = function (decodedBarcode) {
  barcodeDemo.changeStatus("Barcode Decoded");
  var dataEl = document.querySelector("#barcode-data");
  var sourceEl = document.querySelector("#barcode-source");
  var typeEl = document.querySelector("#barcode-type");
  var timeEl = document.querySelector("#barcode-time");

  dataEl.value = decodedBarcode.data;
  sourceEl.value = decodedBarcode.source;
  typeEl.value = decodedBarcode.type;
  timeEl.value = decodedBarcode.time;

  fn.fireFocus(dataEl);
  fn.fireFocus(sourceEl);
  fn.fireFocus(typeEl);
  fn.fireFocus(timeEl);
};

barcodeDemo.createTableColumnBarcodeObj = function (barcodeObject, index) {
  var barcodeName = document.createElement("td");
  var barcodeType = document.createElement("td");
  var barcodeButtonTd = document.createElement("td");
  var barcodeButton = document.createElement("button");

  barcodeName.textContent = barcodeObject.friendlyName;
  barcodeType.textContent = barcodeObject.scannerType;

  barcodeButton.textContent = "Select";
  barcodeButton.onclick = function () {
    barcodeDemo.select(index);
  };

  barcodeButtonTd.appendChild(barcodeButton);

  //	document.querySelector('#barcode-object-type').appendChild(barcodeType);
  document.querySelector("#barcode-object-name").appendChild(barcodeName);
  document.querySelector("#barcode-object-button").appendChild(barcodeButtonTd);
};

barcodeDemo.select = function (index) {
  if (barcodeDemo.selectedBarcodeIndex == index) return;
  /*	if(barcodeDemo.selectedBarcodeIndex != null) {
				barcodeDemo.disable();
			}
		*/
  barcodeDemo.selectedBarcodeIndex = index;
  barcodeDemo.toggleActiveBarcodeButtons(true, false);
};

barcodeDemo.toggleActiveBarcodeButtons = function (enableDisable, startStop) {
  document.querySelector("#barcode-enable-button").disabled = !enableDisable;
  document.querySelector("#barcode-disable-button").disabled = !enableDisable;
  document.querySelector("#barcode-start-button").disabled = !startStop;
  document.querySelector("#barcode-stop-button").disabled = !startStop;
};

barcodeDemo.changeStatus = function (status) {
  document.querySelector("#barcode-status").value = status;
};

EB.Barcode.getDefault();
