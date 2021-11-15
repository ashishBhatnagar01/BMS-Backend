const moviesModal=require('./database/movies');
var mongoose=require('mongoose')
const express=require("express");
const app=express();
var cors = require('cors');

app.use(express.json());
app.use(cors());

var mongodb="mongodb+srv://ashish_bhatnagar:Ashish2580@cluster0.d1tap.mongodb.net/bookmyshow?retryWrites=true&w=majority";

mongoose.connect(mongodb,{ useNewUrlParser: true, useUnifiedTopology: true }).then(()=>console.log("CONNECTION ESTABLISHED"));

app.get('/',(req,res)=>{
    return res.json({"Welcome":`THIS API IS WORKING`});
});

// GET ALL BOOKS

app.get('/movies',async(req,res)=>{
    const getAllMovies=await moviesModal.find();
    return res.json(getAllMovies);
});
app.get('/movies/:id',async(req,res)=>{
    const {id}=req.params;
    const getSpecificMovie=await moviesModal.findOne({_id:id});
    console.log(getSpecificMovie);
    return res.json(getSpecificMovie);
});
app.post('/addmovies',async (req,res)=>{
    // db.publications.push(req.body);
    const addMovie= await moviesModal.create(req.body);
    return res.json({
        newMovie:addMovie,
        message:'New Movie Added Successfully'
    });
});


app.listen(5000,()=>{
    console.log("MY EXPRESS APP IS RUNNING")
})