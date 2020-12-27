const express = require('express')
const router = express.Router()

// Routes and request handling go here
router.get('/', (req, res) => {
    res.render('index') 
})

router.get('/work', (req, res) => {
    res.render('work') 
})
router.get('/news', (req, res) => {
    res.render('news') 
})
router.get('/thinking', (req, res) => {
    res.render('thinking') 
})
router.get('/contact', (req, res) => {
    res.render('contact') 
})

router.get('/about', (req, res) => {    // When user requests website.com/about...
    res.render('about')                 // ... send back about.ejs as a response
})

// 301 redirect example
// router.get('/about', (req, res) => {    // Redirect '/about'
//     res.redirect('my-new-about-page')  // to '/my-new-about-page'
// })

module.exports = router