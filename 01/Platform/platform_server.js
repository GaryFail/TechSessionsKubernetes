const express = require('express');
const axios = require('axios');

const PORT = 80;

const app = express();
app.get('/', (req, res) => {
    console.log('Platform request received');
    
    let message = '';

    axios.get('http://message-generator/')
        .then(function(response){
            console.log(`Response: ${JSON.stringify(response.data)}`);
            message = response.data;
        })
        .catch(function(error){
            console.log(`Error: ${error}`);
        })
        .finally(function(){
            res.send(message);
        });
});

app.listen(PORT, () => {
    console.log(`Platform listening on http://localhost:${PORT}/`);
});