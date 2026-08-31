const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World! Welcome to my Express server.\r\n');
});

const port = 3000;

app.listen(process.env.port || port, () => {
    console.log('Server is running on port ' + (process.env.PORT || port));
});
