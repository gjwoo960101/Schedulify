const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;


app.use(express.static(path.join(__dirname, 'public')));

app.get('/noRedux',  (req, res) => {
    res.sendFile(path.join(__dirname, 'public/src', 'without-redux.html'));
});

app.get('/redux',  (req, res) => {
    res.sendFile(path.join(__dirname, 'public/src', 'with-redux.html'));
});

app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`);
})