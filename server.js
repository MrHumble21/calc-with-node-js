const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 4000
app.use(bodyParser.urlencoded({extended: true}))
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
    console.log(__dirname)
})


app.post('/',(req,res)=>{
    let result  = Number(req.body.num1) + Number(req.body.num2)
    res.send(`<h1>Your Result is :${result} </h1>`)
})


app.get('/about',(req,res)=>{
    res.send('<h1>hello from about page</h1>')
})

app.listen(port, ()=>{
    console.log('server is running on port ' + port)
})
