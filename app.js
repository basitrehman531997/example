const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('🚀 Hello from Basit\'s k3d app with Argo CD and GitHub Actions!');
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
