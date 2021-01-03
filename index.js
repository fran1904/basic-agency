let express = require('express')
let app = express()
let router = require('./router')
const PORT = process.env.PORT || 5000

app.use(express.urlencoded({ extended: false}))
app.use(express.static('./public'))
app.use(router)

app.set('view engine', 'ejs');    

app.use((req, res) => {
    res.status(404).render('404')
})

app.listen(PORT, () =>(`http://localhost:${PORT}`))