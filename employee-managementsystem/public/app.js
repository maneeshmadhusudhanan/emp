const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const router = require('./router');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(router);

app.listen(port,() => {
    console.log(`Server is running on http://localhost:${port}`);
});
