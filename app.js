const express = require('express');
const app = express();
const path = require('path');
let port = process.env.PORT || 80;

//EXPRESS RELATED STUFF
app.use('/static', express.static('static'));//Serving the static files
app.use(express.urlencoded());

//PUG RELATED STUFF
app.set('view engine', 'pug');// Set the template engine as pug
app.set('views', path.join(__dirname, 'views'));//Set the view/template directory (we could also do this without path module)

app.get('/',(req,res)=>{
    res.render('index')
})

app.listen(port, () => {
    console.log(`The application is started successfully on port ${port} click on http://127.0.0.1:${port}`)
})