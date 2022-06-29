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

    ///////////////////////////////////
    //EJEMPLO 1 DE findOneAndUpdate
    Cities.findOneAndUpdate({name :"Fohnsdorf"},{name :"takis"},function(err,docs){
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

    //DELETE/////////////////////////////////////////////////////////////////////
    //EJEMPLO 1 DE deleteOne
    Cities.deleteOne({timezone : "Asia/Chongqing"},function(err,docs){
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
    ///////////////////////////////
    //EJEMPLO 1 DE deleteMany
    Cities.deleteMany({population:{$lte:1000}},function(err,docs){
        if(err){
            console.log(err);
        }else{
            console.log("Borrando: ",docs);
        }
    });
});