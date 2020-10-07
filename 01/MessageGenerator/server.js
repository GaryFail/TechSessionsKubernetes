const express = require('express');

const PORT = 80;

const app = express();
app.get('/', (req, res) => {
    console.log('MessageGenerator: request received');
    res.send({ message: 'Hello World from MessageGenerator!' });
});

app.listen(PORT, () => {
    console.log(`MessageGenerator listening on http://localhost:${PORT}/`);
});