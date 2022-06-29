const path= require('path');
const express= require('express');
const app= express();
const port= process.env.PORT || 3000;

const callback = () => console.log('Server started on port ' + port);
app.listen(port, callback);

const public = path.resolve(__dirname, '../public')
app.use(express.static(public));

const home = (req, res) => res.sendFile(path.join(__dirname, '../views/home.html'))
const login = (req, res) => res.sendFile(path.join(__dirname, '../views/login.html'))
const register = (req, res) => res.sendFile(path.join(__dirname, '../views/register.html'))

app.get('/', home);
app.get('/login', login);
app.get('/register', register);