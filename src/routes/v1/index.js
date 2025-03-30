const express=require('express');

const router=express();

const { InfoController } = require('../../controllers');

router.get('/info',InfoController.info)

module.exports=router;