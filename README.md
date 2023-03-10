# EscPosEncoder.js

Browser-based version of the awesome Node.js module [EscPosEncoder](https://github.com/NielsLeenheer/EscPosEncoder) by [@NielsLeenheer](https://github.com/NielsLeenheer)

## Installation

You can import it as a script tag or use an import statement:

```html
<script src="https://raw.githubusercontent.com/charliegerard/EscPosEncoder.js/main/dist/module.js" type="module"></script>
```

or 

```js
import EscPosEncoder from "https://raw.githubusercontent.com/charliegerard/EscPosEncoder.js/main/dist/module.js";
```

## Usage

You should be able to use it the same way as is described in the [original module](https://github.com/NielsLeenheer/EscPosEncoder)

Example:

```js
import EscPosEncoder from "./escposencoder.js";

const posEncoder = new EscPosEncoder();
const encodedImage = posEncoder
    .initialize()
    .newline()
    .text("HELLO WORLD")
    .encode();
```

An example working with [Adafruit's Tiny Thermal printer](https://www.adafruit.com/product/2751#:~:text=Tiny%20Thermal%20Receipt%20Printer%20%2D%20TTL,fun%20DIY%20electronics%20and%20kits) can be found in the [example](./example) folder.
