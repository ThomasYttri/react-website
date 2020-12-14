//Styled
import styled from "styled-components";
import {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import {MovieState} from "../movieState";

const MovieDetail = () => {
    const history = useHistory();
    const url = history.location.pathname;

    //useState
    const [movies, setMovies] = useState(MovieState);
    const [movie, setMovie] = useState(null);

    //UseEffect
    useEffect(() => {
        const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
        setMovie(currentMovie[0]);
        
    }, [movies, url]);
    console.log(movie);
    return (
        <>
        {movie && (
        <Details>
            <Headline>
                <h2>{movie.title}</h2>
                <img src={movie.mainImg} alt={movie.mainImgAlt}/>
            </Headline>
        </Details>
        )}
        </>
    )
}

const Details = styled.div`

`

const Headline = styled.div`

`

export default MovieDetail;