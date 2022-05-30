//ALL SERVER RELATED WORK DONE HERE
let express = require('express');
let app = express();
let bicycle_dta = require('./data/data.json');
console.log(bicycle_dta.length);

app.set('view engine','ejs');  // THIS IS A template engine or view engine----THE 2nd ARGUMENT DETEMINES WHAT file extension is(.ejs) 
                               // IS GOING TO BE RENDERED IN res.render methods ('view') argument

app.use(express.static('public')); // THIS IS A EXPRESS-built-in MIDDLEWARE|| THE PARAMETER DEFINES WHICH DIRECTORY FILES ARE STATIC
                                   //lets express know which files are static 
app.get('/', (req, res)=> {
  // res.send(bicycle_dta);
  res.render('bicycles', { bicycle_dta });   //BY DEFAULT IT LOOKS FOR THE bicycles.ejs FILE IN VIEWS DIRECTORY
})

app.get('/bicycle', (req, res) => {
    console.log(req.query);// query string as OBJECT
    let id = req.query.id;
    let bicycle = bicycle_dta.find( bi => 
      bi.id === id
    )
    console.log(bicycle);
    res.render('overview.ejs',{ bicycle });  //2nd parameter is an object|| another object is sent as the object's {} property:value [same name]
})
let port = process.env.PORT || 3001

app.listen(port, () => {
    console.log('listening on port ',port);
});