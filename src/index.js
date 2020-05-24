const express = require('express');
const React = require('react');
const Routes = require('./client/Routes').default;
const renderTostring = require('react-dom/server').renderToString;
import { StaticRouter } from 'react-router-dom';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  const content = renderTostring(
    <StaticRouter context={{}} location={req.path}>
      <Routes />
    </StaticRouter>
  );
  const html = `
    <html>
        <body>
            <div id="root">${content}</div>
            <script src="bundle.js"></script>
        </body>
    </html>
  `;

  res.send(html);
});

app.listen(3000, () => {
  console.log('Server is running on 3000 port');
});
