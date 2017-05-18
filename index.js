const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(require('./controllers'));

app.listen(PORT, () => {
    console.log(`Example app listening on ${PORT}`);
});
