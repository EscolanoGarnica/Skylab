import React, { Component } from 'react'
import beersApi from './components/beersApi'
import SearchBeers from './components/SearchBeers'
import ShowBeers from './components/ShowBeers'
import ShowDescriptionBeer from './components/ShowDescriptionBeer'
import './App.css'


class App extends Component {
    constructor() {
        super()

        this.state = {
            beers: [],
            beer:{}
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
                    beers,
                    beer:{}
                })
            })
            .catch(function (err) {
                console.error(err)
            })
    }

    getBeer = (id) =>{
        if(!id)
            return;
        beersApi.getBeer(id)
            .then(res=>{
                let beer = {
                    name: res.name,
                    description:res.style.description                    
                }
                this.setState({
                    beer
                })
            })
            .catch(function (err) {
                console.error(err)
            })
    }

    render() {
        return  <div className="container-fluid">
            <div className='row'>
                <div className='col-md-12'>
                    <h1 className='text-center'><u>Dry Tabern</u></h1>

                    <SearchBeers
                    searchBeers={this.searchBeers} />
                    <ShowBeers
                    beers = {this.state.beers}
                    getBeer={this.getBeer}/>
                    <ShowDescriptionBeer
                    beer ={this.state.beer}
                    />
                </div>
            </div>
        </div>
    }
}

export default App