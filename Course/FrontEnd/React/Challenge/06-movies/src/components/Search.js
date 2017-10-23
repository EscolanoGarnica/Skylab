import React,{Component} from 'react'

import './Search.css'

class Search extends Component{
	render(){
		return <div>
		<input className='form-control inputText searchBox' type="text" placeholder='Write Movie here'/>
		<button className='btn btn-success'>Search!</button>
		</div>
	}
}

export default Search