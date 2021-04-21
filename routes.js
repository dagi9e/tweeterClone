const {User, Tweet} = require('./models/models.js') //D. chages this from const User = require('../models/User')
const jwt = require('jsonwebtoken')
const { Router } = require('express')
const router = Router(

)
// ​;

// // app.use(express.urlencoded({ extended: false }
// )
// // )​
// )
// ;
// ​
// 
// router.get('/', function(req, res) {
//     res.render('pages/index.ejs')
// })

router.get('/', async function(req, res) {
    let tweets = await Tweet.findAll({ include: User }) 
    let data = { tweets }

    res.render('index.ejs', data)
})


router.get('/createUser', function(req, res) {
    res.render('createUser.ejs')
}
// )​
)
;

router.post('/createUser', async function(req, res) {
    let { username, password } = req.body
    // console.log(req.body)
   try{
    let user = await User.create({
        username,
        password
    }
// )​
)
;
   } catch(e){
       console.log(e)
   }

    // console.log(user.toJSON())​

    res.redirect('/')
}
// )​
)

router.get('/createTweet', function(req, res) {
    res.render('login.ejs')
}
// )​
)
;



router.post('/createTweet', async function(req, res) {
    let name = req.body.username
    let {  content 
    } = req.body

    // ​;;
    // print(req.body, "createTweet req.body")​
    let user = await User.findOne({
        where: { username:name }
    }
)
    // ​
    // print(user, 'createTweet User retrieval')​
    if (user) {
       
        // if (user) {
                    let tweet = await Tweet.create({
                        content,
                        timeCreated: new Date(),
                        UserId: user.id //thats how we know which user made the tweet
                    }
                // )​
            )

        res.redirect('/')
        // res.render('ct.ejs')
    } else {
        res.redirect('/error')
    }
})


router.get('/error', function(req, res){
    res.render('error')
})

router.all('*', function(req, res){
    res.send('404 dude')
})
module.exports = router