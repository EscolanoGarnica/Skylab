

class RestaurantsData {
    constructor() {
        this.restaurants = require('../models/Restaurant')
    }

    _projection(show, hide) {
        let projection = '' // ex: { restaurant_id: 1, _id: 0 }

        if (show)
            projection += show.split(',').join(' ')

        if (hide)
            projection += ' ' + hide.split(',').map(field => `-${field}`).join(' ')

        return projection
    }

    _validate(page, limit, show, hide) {
        if (!page || typeof page !== 'number')
            throw new Error(`page cannot be ${page}`)

        if (!limit || typeof limit !== 'number')
            throw new Error(`limit cannot be ${limit}`)

        if (show && typeof show !== 'string')
            throw new Error(`show cannot be ${show}`)

        if (hide && typeof hide !== 'string')
            throw new Error(`hide cannot be ${hide}`)
    }

    list(page, limit, show, hide) {
        return new Promise((resolve, reject) => {
            this._validate(page, limit, show, hide)
            

            const query = this.restaurants.find()

            query.select(this._projection(show,hide))

            query.exec((err, rests) => {
              if (err) reject(err)

                resolve(rests)
            })
            
        })
    }
}

module.exports = RestaurantsData