/**
 * Use the ImageData from a Canvas and flatten the image on a solid background
 */
class CanvasFlatten {
  /**
   * Change the image to grayscale
   *
   * @param  {object}   image         The imageData of a Canvas 2d context
   * @param  {array}    background    Three values consisting of the r, g, b of the background
   * @return {object}                 The resulting imageData
   *
   */
  flatten(image, background) {
    for (let i = 0; i < image.data.length; i += 4) {
      const alpha = image.data[i + 3];
      const invAlpha = 255 - alpha;

      image.data[i] = (alpha * image.data[i] + invAlpha * background[0]) / 255;
      image.data[i + 1] =
        (alpha * image.data[i + 1] + invAlpha * background[1]) / 255;
      image.data[i + 2] =
        (alpha * image.data[i + 2] + invAlpha * background[2]) / 255;
      image.data[i + 3] = 0xff;
    }

    return image;
  }
}

export default new CanvasFlatten();
