import React,{Component} from 'react'
import {Route} from 'react-router-dom'

import moviesApi from '../services/moviesApi'
import Search from './Search'


class Popular extends Component{
	constructor(props){
    super(props)

    this.state={
      movies:[]
    }
  }

  searchMovies = () => {

        moviesApi.searchPopularMovies()
            .then(res => {
            	console.log(res)
                let movies = res.map((elem)=>{
                    let movie = {
                    	id: elem.id,
                        title: elem.title,
                    	img: elem.poster_path}
                    return movie
                })
                this.setState({
                    movies
                })
            })
            .catch(function (err) {
                console.error(err)
            })
    }

    componentDidMount() {
    	this.searchMovies();
    }
	render(){
		return <div>
			<h1>Popular Movies</h1>
			<Route path='/' component={Search}/>
			<h5>{this.state.movies.length} movies were found</h5>
			<div className='container-fluid'>
				<div className='row'>
				{this.state.movies.map(function (elem){
					return <div key={elem.id} className='col-md-2'>
					<img src={'https://image.tmdb.org/t/p/w640/'+elem.img} height="200" width="150"/>
					<h5>{elem.title}</h5>
					</div>
				}
				)}
				</div>
			</div>
		</div>
	}
}

export default Popular