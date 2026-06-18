const app = require("./src/app.js");
const connectToDB = require("./src/db/db.js")

connectToDB();

app.listen(3000, ()=>{
    console.log('Server up and running at 3000');
})
