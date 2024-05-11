// src/utils/dataLoader.js

const fs = require('fs');
const csvParser = require('csv-parser');

let data = {};

fs.createReadStream('data/Projection2021.csv')
  .pipe(csvParser())
  .on('data', (row) => {
    for (const key in row) {
      if (data[key]) {
        data[key].push(row[key]);
      } else {
        data[key] = [row[key]];
      }
    }
  })
  .on('end', () => {
    console.log('Data loaded');
  });

const getHistogram = (column) => {
  if (data[column]) {
    const histogram = {};
    data[column].forEach((value) => {
      histogram[value] = (histogram[value] || 0) + 1;
    });
    return histogram;
  } else {
    return { error: 'Column not found' };
  }
};

module.exports = { getHistogram };
