//varfiable y conexion a bdd
const mongoose = require('mongoose');
//conection
mongoose.connect('mongodb://127.0.0.1:27017/MongoCities',{
//urlNewUrlParser:true,
//useUnifiedTopology:true
});
//referencia a la bdd
var db =mongoose.connection;
//si exiete error
db.on('error',console.error.bind(console,'error en la conexion'));
//sino add datos
db.once('open',function(){
    //cconexciton
    console.log("conexion correcta");
    //2.defincionm schema
    var CitiesSchema= mongoose.Schema({
        name:String,
        country:String,
        timezone:String,
        population:Number,
        location: { longitude:Number, latitude:Number}
    });
    //3. Compilaro schema
    var Cities=mongoose.model('Cities',CitiesSchema,'mongocities');
    //UPDATE
    //agregarle un name pa que no s evaya de largo
    //EJEMPLO 1 DE UPDATE ONE
    Cities.updateOne({timezone : "Europe/Andorra"},{timezone : "CHINGUANGUEO/CHNGN"},function(err,docs){
        if(err){
            console.log(err);
        }else{
            console.log("Actualizando timezone: ",docs);
        }
    });
    //EJEMPLO 2 DE UPDATE ONE
    Cities.updateOne({timezone : "Europe/Brussels"},{timezone : "Africa/tame"},function(err,docs){
        if(err){
            console.log(err);
        }else{
            console.log("Actualizando timezone: ",docs);
        }
    });
    //EJEMPLO 3 DE UPDATE ONE
    Cities.updateOne({timezone : "Australia/Sydney"},{timezone : "America/Newwu"},function(err,docs){
        if(err){
            console.log(err);
        }else{
            console.log("Actualizando timezone: ",docs);
        }
    });
    ///////////////////////////////////
    //EJEMPLO 1 DE findOneAndUpdate
    Cities.findOneAndUpdate({name :"Fohnsdorf"},{name :"takis"},function(err,docs){
        if(err){
            console.log(err);
        }else{
            console.log("Actualizando name: ",docs);
        }
    });
    //EJEMPLO 2 DE findOneAndUpdate
    Cities.findOneAndUpdate({name :"Mudgee"},{name :"magi"},function(err,docs){
        if(err){
            console.log(err);
        }else{
            console.log("Actualizando name: ",docs);
        }
    });
    //EJEMPLO 3 DE findOneAndUpdate
    Cities.findOneAndUpdate({name :"Zelzate"},{name :"zekate"},function(err,docs){
        if(err){
            console.log(err);
        }else{
            console.log("Actualizando name: ",docs);
        }
    });
    ////////////////////////////////////
    //EJEMPLO 1 DE updateMany
    Cities.updateMany({timezone : "America/Argentina/Cordoba"},{population:100000},function(err,docs){
        if(err){
            console.log(err);
        }else{
            console.log("Actualizando population: ",docs);
        }
    });
     //EJEMPLO 2 DE updateMany
     Cities.updateMany({timezone : "Africa/tame"},{population:200000},function(err,docs){
        if(err){
            console.log(err);
        }else{
            console.log("Actualizando population: ",docs);
        }
    });
     //EJEMPLO 3 DE updateMany
     Cities.updateMany({timezone : "America/Newwu"},{population:300000},function(err,docs){
        if(err){
            console.log(err);
        }else{
            console.log("Actualizando population: ",docs);
        }
    });
    //DELETE/////////////////////////////////////////////////////////////////////
    /*Buenos dias Profesor, tengo una duda de la tarea operaciones de escritura, la orden dice que son 3 ejemplos de cada comando,
    o sea seria 3 ejemplos por ejemplo con delete(deleteOne,findOneAndDelete,deleteMany),
    o seria 3 de deleteOne, 3 de findOneAndDelete y 3 de deleteMany?*/
    //EJEMPLO 1 DE deleteOne
    Cities.deleteOne({timezone : "Asia/Chongqing"},function(err,docs){
        if(err){
            console.log(err);
        }else{
            console.log("Borrando timezone: ",docs);
        }
    });
    //EJEMPLO 2 DE deleteOne
    Cities.deleteOne({timezone : "Asia/Kolkata"},function(err,docs){
        if(err){
            console.log(err);
        }else{
            console.log("Borrando timezone: ",docs);
        }
    });
    //EJEMPLO 3 DE deleteOne
    Cities.deleteOne({timezone : "Europe/Warsaw"},function(err,docs){
        if(err){
            console.log(err);
        }else{
            console.log("Borrando timezone: ",docs);
        }
    });
    //////////////////
    //EJEMPLO 1 DE findOneAndDelete
    Cities.findOneAndDelete({name : "Qarāwul"},function(err,docs){
        if(err){
            console.log(err);
        }else{
            console.log("Borrando name=Qarāwul: ",docs);
        }
    });
    //EJEMPLO 2 DE findOneAndDelete
    Cities.findOneAndDelete({name : "Kaharlyk"},function(err,docs){
        if(err){
            console.log(err);
        }else{
            console.log("Borrando name=Kaharlyk: ",docs);
        }
    });
    //EJEMPLO 3 DE findOneAndDelete
    Cities.findOneAndDelete({name : "Scituate"},function(err,docs){
        if(err){
            console.log(err);
        }else{
            console.log("Borrando name=Scituate: ",docs);
        }
    });
    ///////////////////////////////
    //EJEMPLO 1 DE deleteMany
    Cities.deleteMany({population:{$lte:1000}},function(err,docs){
        if(err){
            console.log(err);
        }else{
            console.log("Borrando: ",docs);
        }
    });
    //EJEMPLO 2 DE deleteMany
    Cities.deleteMany({population:{$gte:50000}},function(err,docs){
        if(err){
            console.log(err);
        }else{
            console.log("Borrando: ",docs);
        }
    });
    
    //EJEMPLO 3 DE deleteMany
    Cities.deleteMany({population:{$eq:100000}},function(err,docs){
        if(err){
            console.log(err);
        }else{
            console.log("Borrando: ",docs);
        }
    });
});