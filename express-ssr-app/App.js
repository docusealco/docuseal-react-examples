import React from 'react';
import jwt from 'jsonwebtoken';
import { DocusealBuilder, DocusealForm } from '@docuseal/react';

function App() {
  const token = jwt.sign( {
    user_email: process.env.DOCUSEAL_USER_EMAIL,
    integration_email: 'test@example.com',
    name: 'Integration W-9 Test Form',
    document_urls: ['https://www.irs.gov/pub/irs-pdf/fw9.pdf'],
  }, process.env.DOCUSEAL_TOKEN);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ width: '50%', textAlign: 'center' }}>
        <h1>Docuseal Builder</h1>
        <DocusealBuilder token={token} />
      </div>
      <div style={{ width: '50%', textAlign: 'center' }}>
        <h1>Docuseal Form</h1>
        <DocusealForm
          src="https://docuseal.com/d/LEVGR9rhZYf86M"
          email="signer@example.com"
        />
      </div>
    </div>
  );
}

export default App;
