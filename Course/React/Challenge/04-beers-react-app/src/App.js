import React, { Component } from 'react'
import beersApi from './components/beersApi'
import SearchBeers from './components/SearchBeers'
import ShowBeers from './components/ShowBeers'


class App extends Component {
    constructor() {
        super()

        this.state = {
            beers: []
        }
    }

    searchBeers = (beer) => {
        if(!beer)
            return;

        beersApi.searchBeers(beer)
            .then(res => {
                let beers = res.data.map((elem)=>{
                    let beer = {id: elem.id,
                        name: elem.name}
                    return beer

                })
                this.setState({
                    beers
                })
            })
            .catch(function (err) {
                console.error(err)
            })
    }

    render() {
        return  <div>
           <SearchBeers
            searchBeers={this.searchBeers} />
            <ShowBeers
            beers = {this.state.beers}/>
        </div>
    }
}

/*
<ul>
                {
                    this.state.movies.map(function (movie, index) {
                        return <li key={index}>{movie.title} ({movie.releaseYear})</li>
                    })
                }
            </ul>
 */

export default App