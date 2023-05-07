const express = require('express');
const app = express();
var cors = require('cors')



app.use(cors());
app.use(express.json());
app.use(express.urlencoded())

//yıllık gelir
//ev sahipliği
//iş süresi
//Kredi amacı
//kredi miktarı




app.get('/',(req,res) => {
    res.send('Hello World');
})


app.post('/credit',(req,res) => {

    res.send('Hello World');
})


app.listen(8080)