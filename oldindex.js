
//archivo de construccion de servidores web

'use strict' //1 primer paso
//ayudar a cargar las configuraciones principales de javascrip ES6
//2 paso dos cargar las librerias de express
var express = require('express');
var bodyParse = require('body-parser');


//3 llamamos al paquete express
var app=express();
var port = process.env.port || 3678;
app.use(bodyParse.urlencoded({extended:false}));
app.use(bodyParse.json());

//5 http get --para obetenr datos
app.get('/prueba/:nombre?',function(req,res){
//    var nombre =req.params.nombre;
    var nombre ="takis";
    res.status(200).send({
    data:[3,2,5,7,8],
    texto:"hola mundo con node.js y express - " + nombre
    });
});
//suma
app.get('/prueba/suma/:s1/:s2?',function(req,res){
    //    var nombre =req.params.nombre;
        var s1=req.params.s1;
        var s2=req.params.s2;
        var suma= Number(s1)+Number(s2);
        res.status(200).send({
        texto:"sumando con node.js y express - " + suma
        });
});
//7resta
app.get('/prueba/resta/:r1/:r2?',function(req,res){
    //    var nombre =req.params.nombre;
        var r1=req.params.r1;
        var r2=req.params.r2;
        var resta= r1-r2;
        res.status(200).send({
        texto:"restando con node.js y express - " + resta
        });
});
//multi
app.get('/prueba/multi/:m1/:m2?',function(req,res){
    //    var nombre =req.params.nombre;
        var m1=req.params.m1;
        var m2=req.params.m2;
        var multi= m1*m2;
        res.status(200).send({
        texto:"multiplicando con node.js y express - " + multi
        });
});
//divi
app.get('/prueba/divi/:d1/:d2',function(req,res){
    //    var nombre =req.params.nombre;
        var d1=req.params.d1;
        var d2=req.params.d2;
        var divi= d1/d2;
        res.status(200).send({
        texto:"diviendoe con node.js y express - " + divi
        });
    });
//4 el backend necesita el puerto 
//con una funcion de callback
app.listen(3678, function(){
    console.log('api rest funcionando'+'en http://localhost:'+port);
});
