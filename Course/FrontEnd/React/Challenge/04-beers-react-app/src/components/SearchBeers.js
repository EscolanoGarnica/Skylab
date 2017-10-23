import React, {Component} from 'react' 
import './SearchBeer.css'

class SearchBeers extends Component{

	constructor(props){
		super(props)

		this.state = {
			text: ''
		}
	}

	handlerClickSearch = (event) => {
		event.preventDefault()

		this.props.searchBeers(this.state.text)

		this.setState({
			text: ''
		})
	}

	onTextChange = (event) => {
        const text = event.target.value
        this.setState({
            text
        })
    }

	

	render(){
		return <div className='text-center'>
			<input className='form-control inputText' onChange={this.onTextChange} value={this.state.text} type="text" placeholder='Write here a beer brand'></input>
    	    <button className='btn btn-success' onClick={this.handlerClickSearch}>Search beers</button>
    	</div>
	}
}

export default SearchBeers