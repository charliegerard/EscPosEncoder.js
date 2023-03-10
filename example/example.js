import EscPosEncoder from "../dist/module.js";

window.onload = () => {
  const button = document.querySelector("button");
  button.onclick = () => print();
};

const printSize = 320;
const printerVendorId = 0x4b43;
const printerProductId = 0x3538;
const printerInterface = 0;
const printerEndpoint = 3;

const print = async () => {
  const usbOptions = {
    filters: [
      {
        vendorId: printerVendorId,
        productId: printerProductId,
      },
    ],
  };

  var printer = await navigator.usb.requestDevice(usbOptions);

  await printer.open();
  await printer.selectConfiguration(1);
  await printer.claimInterface(printerInterface);
  await printer.controlTransferOut({
    requestType: "class",
    recipient: "interface",
    request: 0x22,
    value: 0x01,
    index: printerInterface, // interface number TODO make configurable
  });

  const posEncoder = new EscPosEncoder();
  const encodedImage = posEncoder
    .initialize()
    .newline()
    .text("HELLO WORLD")
    .encode();

  printer.transferOut(printerEndpoint, encodedImage);
};
