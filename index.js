const express = require('express');
const cors = require('cors')

const app = express();
const port = 9000;

app.use(cors())
app.use(express.json())

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
