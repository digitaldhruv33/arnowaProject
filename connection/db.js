const mongoose = require('mongoose')

const URL = "mongodb+srv://admin:9837635442@cluster0.w2izj.mongodb.net/arnowa?retryWrites=true&w=majority"

const Connection = mongoose.connect(URL, {
    useNewUrlParser: true, useUnifiedTopology:true
},()=>{
    console.log("connected db")
})


module.exports = Connection