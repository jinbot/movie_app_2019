import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css';

class App extends React.Component{
  
  state={
    isLording : true,
    movies : []
  }

  getMovies = async() => {
    const {
      data : {
        data: {movies}
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    console.log(movies);
    this.setState({movies,isLording:false});
  }

  componentDidMount(){
    this.getMovies();
  }

  render(){
    const {isLording,movies} = this.state;
    return <section className="container">
        {isLording 
        ? <div className="loader">
            <span className="loder_text">Loading...</span>
          </div> : (
          <div className="movies">
            {movies.map(movie => (
              <Movie 
                key = {movie.id} 
                id={movie.id} 
                title={movie.title} 
                year={movie.year} 
                summary={movie.summary} 
                poster={movie.medium_cover_image}
                genres={movie.genres}/>
            ))}
          </div>
        )}
      </section>

  }

}

export default App;
