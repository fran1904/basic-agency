const express = require('express')
const router = express.Router()

// Routes and request handling go here
router.get('/', (req, res) => {
    res.render('index', {title: "Home"}) 
})

router.get('/work', (req, res) => {
    res.render('work', {title: "Work"}) 
})
router.get('/news', (req, res) => {
    res.render('news', {title: "News"}) 
})
router.get('/thinking', (req, res) => {
    res.render('thinking', {title: "Thinking"}) 
})
router.get('/contact', (req, res) => {
    res.render('contact', {title: "Contact"}) 
})

router.get('/about', (req, res) => {    
    res.render('about', {title: "About"})                
})

module.exports = router