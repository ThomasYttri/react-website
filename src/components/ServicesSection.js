//Import icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/money.svg";
//Images
import home2 from "../img/home2.png";
//Styles
import styled from 'styled-components';
import {About, Description, Image} from "../styles";

const ServicesSection = () => {
    return (
        <About>
            <Description>
                <h2>High <span>quality</span> services.</h2>
            </Description>
            <div>
                <div className="card">
                    <div className="icon">
                        <img src={clock} alt="Clock icon"/>
                        <h3>Efficient</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="card">
                    <div className="icon">
                        <img src={teamwork} alt="Teamwork icon"/>
                        <h3>Teamwork</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="card">
                    <div className="icon">
                        <img src={diaphragm} alt="Diaphragm icon"/>
                        <h3>Diaphragm</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="card">
                    <div className="icon">
                        <img src={money} alt="Money icon"/>
                        <h3>Affordable</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            <Image>
                <img src={home2} alt="Camera"/>
            </Image>
        </About>
    )
}

// const Services = styled(About)`
//     display: flex;
//     h2 {
//         padding-bottom: 5rem;
//     }
//     p {
//         width: 70%;
//         padding: 2rem 0rem 4rem 0rem;
//     }
// `;

// const Cards = styled.div`
//     display: flex;
//     /* flex-basis: 100%; */
//     flex-wrap: wrap;
// `;

export default ServicesSection;