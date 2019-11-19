import React from 'react';
import Proptype from 'prop-types';
import './Movie.css';

function Movie({ year, title, summary, poster,genres}){

    return (
        <div className="movie">
            <img src={poster} alt={title} title={title} />
            <div className="movie_data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="movie__gernes">{genres.map((genre,index) => <li key={index}>{genre}</li>)}</ul>
                <p className="movie__summary">{summary.slice(0,140)}...</p>
            </div>
        </div>
    );
}

Movie.proptype = {
    id:Proptype.number.isRequired,
    title:Proptype.string.isRequired,
    year:Proptype.number.isRequired,
    summary:Proptype.string.isRequired,
    poster:Proptype.string.isRequired,
    genres: Proptype.arrayOf(Proptype.string).isRequired
}

export default Movie;