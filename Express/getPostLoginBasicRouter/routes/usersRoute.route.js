import { Router } from "express";

const router = new Router();


router.get('/',(req, res)=>{
    res.json({user:'Preet Monga', age:'22'});
});

router.get('/',(req, res)=>{
    res.json({user:'Preet Monga', age:'22'});
});

router.post('/', (req, res)=>{
    res.send('User created');
})


export default router;