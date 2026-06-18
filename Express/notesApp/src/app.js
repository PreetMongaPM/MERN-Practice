const express = require("express");
const noteModel = require("./models/note.model.js")

const app = express();

// const notes = [];

app.use(express.json());  //use this middleware to make the raw data readable

app.get("/notes", async (req, res)=>{
    const notes = await noteModel.find({
        // title: 'note 0'  // for special one
    }); 
    res.status(200).json({
        message: 'Notes fetched successfully',
        notes: notes
    });
})

app.post("/notes", async (req, res)=>{
    const data = req.body;

    await noteModel.create({
        title: data.title,
        description: data.description,
    })

    // notes.push(req.body); 
    res.status(201).json({
        message: "note added successfully"
    })
})

app.delete("/notes/:id", async (req, res)=>{
    const id = req.params.id;
    await noteModel.findOneAndDelete({_id:id});
    res.status(200).json({
        message: 'Note deleted succesfully'
    })
})

app.patch("/notes/:id", async (req, res)=>{
    const id = req.params.id;
    await noteModel.findOneAndUpdate(
        {_id: id}, 
        {description: req.body.description})
    res.status(200).json({
        message: 'Note updated successfully', 
    })
})



//Local variable CRUD 

// app.delete("/notes/:index", (req, res)=>{
//     const index = req.params.index;
//     delete notes[index];
//     res.status(200).json({
//         message:`note ${index} deleted successfully`
//     })
// })

// app.patch("/notes/:index", (req, res)=>{
//     const index = req.params.index;
//     notes[index] = req.body;
//     res.status(200).json({
//         message: `note ${index} updated successfully`
//     })
// })

module.exports = app;