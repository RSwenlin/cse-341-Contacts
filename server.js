const express = require('express');
const mongodb = requre('./data/database');
const app = express();
const PORT = process.env.PORT || 8080;


app.use('/', require('./routes'));

mongodb.initDb((err) => {
    if(err) {
        console.log(err);
    }
    else {

    }
});

app.listen(PORT, () => {
    console.log(`Database is listening and node running on port ${PORT}`);
});
