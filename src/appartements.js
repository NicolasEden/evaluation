import React from 'react';
import Line from './Assets/line.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
    faArrowRight,
    faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
class Appartements extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        AOS.init({
            duration : 2000
        })
      }
    render() {
        var webService = this.props.info
        return (
            <div className="all">
                <div className="navbar">
                    <div className="burger">
                        <div className="input">
                            <input type="checkbox" />
                            <span></span>
                            <span></span>
                            <span></span>
                            <ul>
                                <li>Home</li>
                                <li>The Crow</li>
                                <li>Tutoriel</li>
                                <li>Blog</li>
                            </ul>
                        </div>
                    </div>
                    <div className="logo">
                        <img src="https://i.imgur.com/OosBQlR.png"></img>
                    </div>
                    <div className="contain">
                        <div className="element">
                            <p>Home</p>
                        </div>
                        <div className="element">
                            <p>The crow</p>
                        </div>
                        <div className="element">
                            <p>Tutoriel</p>
                        </div>
                        <div className="element">
                            <p>Blog</p>
                        </div>
                    </div>
                </div>
                <div className="header">
                    <div className="title">
                        <h1>Featured <span>Properties</span></h1>
                    </div>
                    <div className="spacer">
                        <img src={Line} alt="Une ligne"/>
                    </div>
                    <div className="subtitle">
                        <p>Quisque diam lorem interdum vitaapibus vitae pede. Donec eget tellus non erat lacinia fertum. Donec in velit vel ipsum auctovinar.</p>
                    </div>
                </div>
                <div className="apparts">
                    <div className="contain">
                        {webService.content.map((item, i) => (
                            <div className="content" data-aos='flip-right'>
                                <div className="top">
                                    <img src={item.img} alt="Image d'un appartement"/>
                                </div>
                                <div className="middle">
                                    <div className="street">
                                        <p>{item.address}</p>
                                    </div>
                                    <div className="city">
                                        <p>{item.city} / {item.state}</p>
                                    </div>
                                    <div className="price">
                                        <p>{item.dollar} $</p>
                                    </div>
                                </div>
                                <div className="bottom">
                                    <div className="text">
                                        <p>{item.squareFit} m²</p>
                                        <p>•</p>
                                        <p>{item.nbBathRoom} {plural(item.nbBathRoom, "Bain")}</p>
                                        <p>•</p>
                                        <p>{item.nbBedRoom} {plural(item.nbBedRoom, "Chambre")}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="footer">
                    <button><a href='/apparts/all'>ALL PROPERTIES</a></button>
                </div>
            </div>
        );
    }
}

export default Appartements;


function plural(nb, text) {
    if (nb > 1) return text+="s"
    else return text
}
function next() {
    let path = window.location.pathname.split(`/apparts/`).join(``)
    path = new Number(path+1)
    window.location.pathname = `/apparts/${path}`
}
function previous() {
    let path = window.location.pathname.split(`/apparts/`).join(``)
    path = new Number(path-1)
    window.location.pathname = `/apparts/${path}`
}
