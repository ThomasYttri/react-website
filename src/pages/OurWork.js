//Style
import styled from "styled-components";
//React router dom
import {Link} from "react-router-dom";
//Images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";

const OurWork = () => {
    return(
        <Work>
            <Movie>
                <h2>The Athlete</h2>
                <div className="line"></div>
                <Link to="/">
                    <img src={athlete} alt="Man resting on the boxingring ropes, wearing boxing gloves."/>
                </Link>
            </Movie>
            <Movie>
                <h2>The Racer</h2>
                <div className="line"></div>
                <Link to="/">
                    <img src={theracer} alt="Girl leaning on a yellow and old race car."/>
                </Link>
            </Movie>
            <Movie>
                <h2>Good Times</h2>
                <div className="line"></div>
                <Link to="/">
                    <img src={goodtimes} alt="Couple standing under a three whilst holding each other."/>
                </Link>
            </Movie>
        </Work>
    )
}

const Work = styled.div`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    h2 {
        padding: 1rem 0rem;
    }
`;

const Movie = styled.div`
    padding-bottom: 10rem;
    .line {
        height: 0.5rem;
        background: #cccccc;
        margin-bottom: 3rem;
    }
    img {
        width: 70%;
        height: 70vh;
        object-fit: cover;
    }
`;

export default OurWork;