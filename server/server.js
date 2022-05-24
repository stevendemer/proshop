const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
require('dotenv').config();

app.get('/', (req, res) => {
    res.send("<h3>Welcome to express !</h3>")
});



app.listen(PORT, () => console.log(`Listening on port ${PORT}`));