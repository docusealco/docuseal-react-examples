import { WebView } from 'react-native-webview';

export default function SignForm(formProps) {
  return (
    <WebView
      source={{ html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body>
            <div id="root"></div>
            <script type="importmap">
              {
                "imports": {
                "@docuseal/react": "https://unpkg.com/@docuseal/react@1.0.1/dist/index.esm.js",
                "react": "https://cdn.skypack.dev/react@17.0.1",
                "react-dom": "https://cdn.skypack.dev/react-dom"
                }
              }
            </script>
            <script type="module">
              import React from 'react'
              import * as ReactDOM from 'react-dom'
              import { DocusealForm } from '@docuseal/react'
              ReactDOM.render(React.createElement(DocusealForm, ${JSON.stringify(formProps)}), document.getElementById('root'));
            </script>
          </body>
        </html>
      ` }}
    />
  );
}
