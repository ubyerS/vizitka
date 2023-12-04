const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});


app.use(function(req, res, next) {
    res.status(404).send('Error 404: Not found');
});

// ����� �ࢥ� �� ����� 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`��ࢥ� ����饭 �� ����� ${PORT}`);
});