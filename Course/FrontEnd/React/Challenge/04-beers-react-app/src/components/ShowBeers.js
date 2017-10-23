import React, {Component} from 'react'
import './ShowBeers.css'

class ShowBeers extends Component{

	handleClickBeer=(id)=>{

		this.props.getBeer(id)
	}
	render(){
		return <div className='text-center'>	
			<ul>
			{this.props.beers.map((beer)=>{
				return <li onClick={()=>{this.handleClickBeer(beer.id)}} key={beer.id}><a href='#'>{beer.name}</a></li>
			})
			}
			</ul>
			</div>
	}

}

export default ShowBeers