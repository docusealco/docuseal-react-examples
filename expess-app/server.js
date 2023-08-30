const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const app = express();

dotenv.config({ path: './.env' });

app.use(bodyParser.json());

app.post('/api/docuseal/builder_token', (req, res) => {
  const token = jwt.sign({
    user_email: process.env.DOCUSEAL_USER_EMAIL,
    integration_email: 'customer@example.com',
    name: 'Integration W-9 Test Form',
    document_urls: ['https://www.irs.gov/pub/irs-pdf/fw9.pdf'],
  }, process.env.DOCUSEAL_TOKEN);

  res.json({ token });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(8080, () => {
  console.log(`Server is running`);
});
