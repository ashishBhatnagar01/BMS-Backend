const mongoose= require('mongoose');

const moviesSchema=mongoose.Schema({
    id:String,  
    imageUrl:String,
    title:String,
    actors:String
})

const moviesData=mongoose.model("movies",moviesSchema);

module.exports=moviesData;