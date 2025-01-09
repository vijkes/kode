const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Microservice');
});

app.listen(PORT, () => {
  console.log(`Microservice running on http://localhost:${PORT}`);
});
