const express = require('express');
const cookieParser = require('cookie-parser')
const app = express();

app.use(cookieParser())

app.get('/', (req, res) => {
  console.log(req.cookies);
  res.send(`hello ${req.cookies.token ? req.cookies.token : 'guest'}`);
});

app.get('/login', (req, res) => {
  res.cookie('token', 'amr', {
    httpOnly: true,
    expires: new Date(Date.now() + 60000),
  });
  res.send('Hello Login !');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`server running on post ${PORT}`));
