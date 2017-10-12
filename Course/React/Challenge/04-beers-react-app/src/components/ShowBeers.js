import React, {Component} from 'react'

class ShowBeers extends Component{

	render(){
		return <div>	
			<ul>
			{this.props.beers.map(function(beer){
				return <li key={beer.id}><a href='#'>{beer.name}</a></li>
			})
			}
			</ul>
			</div>
	}

}

export default ShowBeers