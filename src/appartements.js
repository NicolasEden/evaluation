import React from 'react';
import Line from './Assets/line.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRight,
    faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
class Appartements extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var webService = this.props.info
        return (
            <div className="all">
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
                            <div className="content">
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
                        {arrow()}
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
function arrow() {
    let path = window.location.pathname.split(`/apparts/`).join(``)
    path = new Number(path+1)
    console.log(`Do arrow()`)
    if (path == 1) {
        return (
            <div className="contain">
                <div className="previous hide">
                    <button onClick={() => {previous()}}><FontAwesomeIcon className="Icon" icon={faArrowLeft} /></button>
                </div>
                <div className="next">
                    <button onClick={() => {next()}}><FontAwesomeIcon className="Icon" icon={faArrowRight} /></button>
                </div>
            </div>
        )
    } else {
        return (
            <div className="contain">
                <div className="previous">
                    <button onClick={() => {previous()}}><FontAwesomeIcon className="Icon" icon={faArrowLeft} /></button>
                </div>
                <div className="next hide">
                    <button onClick={() => {next()}}><FontAwesomeIcon className="Icon" icon={faArrowRight} /></button>
                </div>
            </div>
        )
    }
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