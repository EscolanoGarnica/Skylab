import React, {Component} from 'react' 
import beersApi from './beersApi'

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
		return <div>
			<input onChange={this.onTextChange} value={this.state.text} type="textbox"></input>
    	    <button onClick={this.handlerClickSearch}>Search beers</button>
    	</div>
	}
}

export default SearchBeers