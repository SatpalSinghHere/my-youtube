require('dotenv').config()

const express = require('express');
const app=express();
const axios = require('axios');

app.get('/:query', (req, res) => {
    const query = req.query.q;
    axios.get(`https://suggestqueries.google.com/complete/search?client=youtube&ds=yt&q=${query}`)
    .then(response => {
        console.log(response.data)
        res.header('Access-Control-Allow-Origin', process.env.CLIENT_DOMAIN)
        res.send(response.data);
    })
})

app.listen(5000, ()=>{
    console.log('Server is running on port 5000');
});