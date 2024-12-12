const express = require('express');
const path = require('path');

const app = express();
const PORT = 3002;

app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});


app.use(express.static(path.join(__dirname, 'public')));

app.get('/',  (req, res) => {
    res.sendFile(path.join(__dirname, 'public/src', 'redux-stu-2.html'));
});

app.get('/noRedux',  (req, res) => {
    res.sendFile(path.join(__dirname, 'public/src', 'without-redux.html'));
});

app.get('/redux',  (req, res) => {
    res.sendFile(path.join(__dirname, 'public/src', 'with-redux.html'));
});

app.get('/redux_stu',  (req, res) => {
    res.sendFile(path.join(__dirname, 'public/src', 'redux-stu.html'));
});
app.get('/redux_stu2',  (req, res) => {
    res.sendFile(path.join(__dirname, 'public/src', 'redux-stu-2.html'));
});

app.get('/main',  (req, res) => {
    res.sendFile(path.join(__dirname, 'public/src', 'main.html'));
});


app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`);
})