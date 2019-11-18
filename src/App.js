import React from 'react';
import axios from 'axios';

class App extends React.Component{
  
  state={
    isLording : true,
    movies : []
  }

  getMovies = async() => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  }

  componentDidMount(){
    this.getMovies();
  }

  render(){
    const {isLording} = this.state;
    return <div>
        {isLording ? "Lording" : "we are ready"}
      </div>

  }

}

export default App;
