const express = require('express');
const app = express();
const https = require('https');

app.get('/', (request, response) => {
  https.get('https://complimentr.com/api', resp => {
    resp.on('data', chunk => {
      response.send(`
        <http>
          <body>
            <p style="font-size: 24px; color: green;">
              ${chunk.toString()}!
            </p>
          </body>
        </http>
      `);
    });
  });
});

app.listen(process.env.PORT || 3000);
