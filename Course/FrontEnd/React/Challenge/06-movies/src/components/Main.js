import React,{Component} from 'react' 
import {Route} from 'react-router-dom'

import Upcoming from './Upcoming'
import NowPlaying from './NowPlaying'
import Popular from './Popular'
import TopRated from './TopRated'

class Main extends Component{

	render(){
		return(
			<div>
				<Route path='/upcoming' component={Upcoming}/>
	          	<Route path='/nowPlaying' component={NowPlaying}/>
	          	<Route path='/popular' component={Popular}/>
	          	<Route path='/topRated' component={TopRated}/>
	        </div>
		);
	}
}

export default Main