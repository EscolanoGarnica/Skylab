import React,{Component} from 'react'
import './ShowDescriptionBeer.css'

class ShowDescriptionBeer extends Component{

	render(){
		return <div className='text-center'>
			<h2><u>{this.props.beer.name}</u></h2>
			<p>{this.props.beer.description}</p>
		</div>
	}

}

export default ShowDescriptionBeer