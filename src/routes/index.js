const { Router } = require("express");
const router = Router ();


router.get('/', (req,res) =>{
    res.render("index")
})

router.post('/register', (req, res) => {
    
    console.log(req.body)
    // req.flash('users', req.body);
        req.flash('OK', "Ahora estas registrado");
    // req.session.users = req.body;
    res.redirect('/profile')
})

router.get('/profile', (req,res) => {
//    const message= req.flash('OK');
//    delete req.session.message;
        res.render('profile')
});
router.get('/productos', (req,res) =>{
    res.render('productos')
})

module.exports= router;