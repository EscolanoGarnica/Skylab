require('dotenv').config()

const express = require('express')

const app = express()

const { MongoClient } = require('mongodb')

const url = 'mongodb://localhost:27017/test'

MongoClient.connect(url, (err, db) => {
    if (err) throw err

    const router = express.Router()
    let projection = {}

    function showAndHide(show,hide) {
        
        projection={}

        if (show) {
            const fieldsToShow = show.split(',')
            fieldsToShow.forEach(field => projection[field] = 1)

            if (hide == '_id') {
                const fieldsToHide = hide.split(',')
                fieldsToHide.forEach(field => projection[field] = 0)
            }
        } else if (hide) {
            const fieldsToHide = hide.split(',')
            fieldsToHide.forEach(field => projection[field] = 0)
        }

        
    }


    router.route('/restaurants')
        .get((req, res) => {
            const { show, hide, limit, page } = req.query

            showAndHide(show,hide)

            db.collection('restaurants')
                .find(undefined, projection)
                .limit(parseInt(limit) || 2)
                .skip(parseInt(page)|| 0)
                .toArray((err, docs) => {
                    if (err)
                        return res.json({
                            status: 'KO',
                            message: err.message
                        })

                    res.json({
                        status: 'OK',
                        message: 'restaurants listed successfully',
                        data: docs
                    })
                })
        })

    router.route('/restaurants/borough/:borough')
        .get((req, res) => {
            
            const { show, hide, limit, page} = req.query

            showAndHide(show,hide)

            db.collection('restaurants')
                .find({ borough: req.params.borough }, projection)
                .limit(parseInt(limit) || 2)
                .skip(parseInt(page)|| 0)
                .toArray((err, docs) => {
                    if (err)
                        return res.json({
                            status: 'KO',
                            message: err.message
                        })

                    res.json({
                        status: 'OK',
                        message: 'restaurants listed successfully',
                        data: docs
                    })
                })
        })

    app.use('/api', router)

    console.log('Starting Restaurants API...')

    app.listen(process.env.PORT, () => console.log('Restaurants API is up'))

    process.on('SIGINT', () => {
        console.log('\nStopping Restaurants API...')

        process.exit()
    })
})