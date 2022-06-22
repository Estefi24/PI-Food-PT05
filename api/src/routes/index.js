const { Router } = require('express');

const router = Router();

const rutas = require('./routers')


router.use('/food', rutas)



module.exports = router;
