const express = require('express');
const path = require('path');
const ReactDOMServer = require('react-dom/server');
const React = require('react');
const App = require('./src/App').default;
const dotenv = require('dotenv').config({ path: './.env.local' });

const app = express();

app.use('/static', express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
  const content = ReactDOMServer.renderToString(<App />);

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>DocuSeal React Express SSR Example</title>
      </head>
      <body>
        ${content}
      </body>
    </html>
  `;

  res.send(html);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
