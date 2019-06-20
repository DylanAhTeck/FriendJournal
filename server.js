const express = require('express');

const app = express();

app.get('/', (req, res) => res.sjson({ msg: 'hi' }));

//Define Routes
app.user('/api/users', require('./route/users'));
app.user('/api/auth', require('./route/auth'));
app.user('/api/contacts', require('./route/contacts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
