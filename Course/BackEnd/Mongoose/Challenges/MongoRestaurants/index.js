require('dotenv').config()

const express = require('express')
const app = express()

let restaurantsData

const router = express.Router()

router.use((req, res, proceed) => {
    const { page, limit, show, hide } = req.query

    req.page = page ? parseInt(page) : 1
    req.limit = limit ? parseInt(limit) : 50
    req.show = show
    req.hide = hide

    proceed()
})


router.route('/restaurants')
    .get((req, res) => {
        const { page, limit, show, hide } = req

        restaurantsData.list(page, limit, show, hide)
            .then(restaurants =>
                res.json({
                    status: 'OK',
                    message: 'restaurants listed successfully',
                    data: restaurants
                }))
            .catch(err => {
                res.json({
                    status: 'KO',
                    message: err.message
                })
            })
    })









query.exec((err, restaurants) => {
  if (err) throw err

  console.log(restaurants)
})

/**
*
*/

app.use('/api', router)



const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost:27017/test', { useMongoClient: true })



restaurantsData = new(require('./restaurants/RestaurantsData'))

console.log('Starting Restaurants API...')

app.listen(process.env.PORT, () => console.log(`Restaurants API is up on port ${process.env.PORT}`))

process.on('SIGINT', () => {
    console.log('\nStopping Restaurants API...')

    if (db) db.close()

    process.exit()
})