// src/routes/histogramRoutes.js

const express = require('express');
const { getHistogram } = require('../utils/dataLoader');

const router = express.Router();

router.get('/:column/json', (req, res) => {
  const column = req.params.column;
  const histogram = getHistogram(column);
  res.json(histogram);
});

router.get('/:column/html', (req, res) => {
    const column = req.params.column;
    const histogram = getHistogram(column);
    const html = generateHTML(column, histogram);
    res.send(html);
  });

// Endpoint for bar chart
router.get('/:column/bar', (req, res) => {
    const column = req.params.column;
    const histogram = getHistogram(column);
    const html = generateHTMLWithChar(column, histogram);
    res.send(html);
});

const generateHTML = (column, histogram) => {
    let html = '<!DOCTYPE html><html><head><title>Histogram</title></head><body>';
    html += `<h1>${column} Histogram</h1>`;
    html += '<ul>';
    for (const value in histogram) {
      html += `<li>${value}: ${histogram[value]}</li>`;
    }
    html += '</ul></body></html>';
    return html;
  };

  const generateHTMLWithChar = (column, histogram) => {
    const labels = Object.keys(histogram);
    const values = Object.values(histogram);
  
    let html = `<!DOCTYPE html>
    <html>
    <head>
      <title>${column} Histogram</title>
      <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    </head>
    <body>
      <canvas id="${column}Chart" width="800" height="400"></canvas>
      <script>
        var ctx = document.getElementById('${column}Chart').getContext('2d');
        var myChart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ${JSON.stringify(labels)},
            datasets: [{
              label: '${column} Histogram',
              data: ${JSON.stringify(values)},
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      </script>
    </body>
    </html>`;
  
    return html;
  };
  

module.exports = router;
