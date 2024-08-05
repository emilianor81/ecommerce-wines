require('dotenv').config();
const { Router } = require('express');
const router = Router();
const Sequelize = require('sequelize');
const bodyParser = require("body-parser")
const mercadopago = require ('mercadopago');

mercadopago.configure({
  access_token: process.env.MERCADOPAGO_TOKEN
});


router.post('/', (req, res)=>{
    let preference = {
        items: [],
        back_urls: {
            success: 'http://localhost:3000/home?page=1',
            failure: 'http://localhost:3000/home?page=1',
            pending: 'http://localhost:3000/home?page=1',
          },
          auto_return: 'approved',
         payer:{email:"test_user_80899844@testuser.com"},
         payment_methods: {excluded_payment_types:[ {"id":"ticket"}, {"id":"atm"}]}
    };
console.log(1,req.body)
    req.body.forEach(x=> preference.items.push({id: x.id, currency_id:'ARS', quantity: x.cantidad, title: x.name||x.title, unit_price:x.price}))
      mercadopago.preferences.create(preference)
      .then(function(response){
        console.log(2,req.body)
          res.send( response.body.sandbox_init_point)
      }).catch(function(error){
        console.log('error',error);
      });
})


module.exports = router;

/*
APRO: Pago aprobado.
CONT: Pago pendiente.
OTHE: Rechazado por error general.
CALL: Rechazado con validación para autorizar.
FUND: Rechazado por monto insuficiente.
SECU: Rechazado por código de seguridad inválido.
EXPI: Rechazado por problema con la fecha de expiración.
FORM: Rechazado por error en formulario.

*/