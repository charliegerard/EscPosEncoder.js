export const createCanvas = function (width, height) {
    return Object.assign(document.createElement("canvas"), {
        width: width,
        height: height,
    });
};