const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from Microservice');
});

app.listen(PORT, () => {
  console.log(`Microservice is running on http://localhost:${PORT}`);
});
