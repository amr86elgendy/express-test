const express = require('express');
const cookieParser = require('cookie-parser')
const app = express();

app.use(cookieParser())

app.get('/', (req, res) => {
  let name = req.cookies.name ? req.cookies.name : 'guest';
  res.send(`
  <h1>hello ${name}</h1>
  <form action='/login'>
  <button type="submit">Send</button>
  </form>
  `);
});

app.get('/login', (req, res) => {
  res.cookie('name', 'amr', {
    httpOnly: true,
    expires: new Date(Date.now() + 60000),
  });
  res.send(`<h1>Hello Login ! </h1><form action='/'>
  <button type="submit">back</button>
  </form>`);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`server running on post ${PORT}`));
