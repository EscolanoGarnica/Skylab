import axios from 'axios'

const moviesApi =  {
    baseUrl: 'https://api.themoviedb.org/3/movie/',
    key:'59e8e6998eaa4044a4281e9c5b9ea820',


    searchFilterMovies: function (filter) {
        return axios.get(this.baseUrl + filter + '?api_key='+this.key+'&language=en-US&page=1')
        .then((res)=>{
            return res.data.results
        })
    },

    searchPopularMovies: function () {
    	return axios.get(this.baseUrl + 'popular?api_key='+this.key+'&language=en-US&page=1')
        .then((res)=>{
            return res.data.results
        })
    },

    searchUpcommingMovies: function () {
        return axios.get(this.baseUrl + 'upcoming?api_key=' + this.key + '&language=en-US&page=1')
        .then((res)=>{
            return res.data.results
        })
	},
    searchNowPlayingMovies: function () {
        return axios.get(this.baseUrl +'now_playing?api_key=' + this.key + '&language=en-US&page=1')
        .then((res)=>{
            return res.data.results
        })
    },
    searchTopRatedMovies: function () {
        return axios.get(this.baseUrl +'top_rated?api_key=' + this.key + '&language=en-US&page=1')
        .then((res)=>{
            return res.data.results
        })
    },
}

export default moviesApi
