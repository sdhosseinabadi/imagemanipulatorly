// const Jimp = require('jimp'); // Image processing library
const polycalculator = require('polycalculator');
const formValidJs = require('form-valid-js');
const dataVisualizerCsv = require('data-visualizer-csv');
const codeFormlly = require('code-formlly');


async function resize(imagePath, newWidth, newHeight, outputPath) {
  try {
    const image = await Jimp.read(imagePath);
    await image.resize(newWidth, newHeight);
    await image.write(outputPath);
  } catch (error) {
    throw new Error(`Error resizing image: ${error.message}`);
  }
}

async function convertToGrayscale(imagePath, outputPath) {
  try {
    const image = await Jimp.read(imagePath);
    await image.grayscale();
    await image.write(outputPath);
  } catch (error) {
    throw new Error(`Error converting image to grayscale: ${error.message}`);
  }
}

async function applyFilter(imagePath, filter, outputPath) {
  try {
    const image = await Jimp.read(imagePath);
    switch (filter) {
      case 'sepia':
        await image.sepia();
        break;
      // You can add cases for other filters here
      default:
        throw new Error(`Unsupported filter: ${filter}`);
    }
    await image.write(outputPath);
  } catch (error) {
    throw new Error(`Error applying filter to image: ${error.message}`);
  }
}

async function crop(imagePath, x1, y1, x2, y2, outputPath) {
  try {
    const image = await Jimp.read(imagePath);
    await image.crop(x1, y1, x2 - x1, y2 - y1);
    await image.write(outputPath);
  } catch (error) {
    throw new Error(`Error cropping image: ${error.message}`);
  }
}

module.exports = {
  resize,
  convertToGrayscale,
  applyFilter,
  crop,
};
