require('dotenv').config();
const app = require("./src/app.js");

app.listen(3000, ()=>{
    console.log('Server up and running at port 3000');
})