const mongoose = require('mongoose');
let Band = require('./rockBandSchema')
let cors = require('cors')

mongoose.connect('mongodb://localhost:27017/retoKubide', {useNewUrlParser: true, useUnifiedTopology: true})
const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());


app.get('/rockbands', (req, res) => {
  let nameBand = req.query.name
  if(nameBand == ""){
    nameBand = undefined
  }
  if (nameBand !== undefined) {
    Band.find({name: new RegExp(nameBand, "i")}, (err, banda) => {
      if (err) {
        res.send(err);
      } else {
        res.send(banda);
      }
    });
  } else {
    Band.find({}, function (err, banda) {
      if (err) {
        console.log(err);
      } else {
        console.log(banda);
        res.send(banda);
      }
    });
  }
  
})

app.post('/rockbands', (req, res) =>{
  let newBand = new Band({
    name: req.body.name,
    yearBeginning: req.body.yearBeginning,
    description: req.body.description,
    video: req.body.video,
    foto: req.body.foto
  })
  newBand.save(function(err,newBand){
    if (err){
      res.send(err)
    }else{
      res.send(newBand)
    };
  })

})

app.put('/rockBands', (req, res) =>{
  let idBand = req.body._id;
  console.log(idBand)
  if(req.body.name === ""){
    req.body.name = undefined
  }
  if(req.body.yearBeginning === 0){
    req.body.yearBeginning = undefined
  }
  if(req.body.description === ""){
    req.body.description = undefined
  }
  if(req.body.video === ""){
    req.body.video = undefined
  }
  if(req.body.foto === ""){
    req.body.foto = undefined
  }  

  Band.updateOne(
    {_id: idBand},
    {
      name: req.body.name,
      yearBeginning: req.body.yearBeginning,
      description: req.body.description,
      video: req.body.video,
      foto: req.body.foto
  }, 
  { omitUndefined: true },
  function (err,banda){
    if(err){
      res.send(err)
    } else{
      res.status(200).send(banda)
    }
  })

})

app.delete('/rockbands',  (req,res) =>{
  if(req.body._id !== undefined){
    Band.findByIdAndRemove(req.body._id, (err, band) =>{
      if(err){
        res.send(err)
      }else {
        res.status(200).send(band);
      }
    })
  }
})

app.use(function(request, response, next){
  respuesta = {codigo: 404, mensaje: "URL no encontrada"}
  response.status(404).send(respuesta)
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})