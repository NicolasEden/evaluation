import React from 'react';
import './CSS/loading.scss'
import cookie from 'react-cookies'
class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "click": false
        }
    }
    click() {
        var cookies = null;
        console.log(document.cookie)
        if (cookie.load('informations')) {
            cookies = cookie.load('informations')
            cookies.push(this.props.info)
            cookie.save('informations', cookies, { path: '/' })
        } else {
            cookies = []
            cookies.push(this.props.info)
            cookie.save('informations', cookies, { path: '/' })
        }
        this.setState({
            "click": true
        })
    }
    render() {
        if (this.state.click === false) {
            return (
                <div onClick={() => this.click()} className="content" data-aos='flip-right'>
                    <div className="top">
                        <img src={this.props.info.img} alt={this.props.info.city}/>
                    </div>
                    <div className="middle">
                        <div className="street">
                            <p>{this.props.info.address}</p>
                        </div>
                        <div className="city">
                            <p>{this.props.info.city} / {this.props.info.state}</p>
                        </div>
                        <div className="price">
                            <p>{this.props.info.dollar} $</p>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="text">
                            <p>{this.props.info.squareFit} m²</p>
                            <p>•</p>
                            <p>{this.props.info.nbBathRoom} {plural(this.props.info.nbBathRoom, "Bain")}</p>
                            <p>•</p>
                            <p>{this.props.info.nbBedRoom} {plural(this.props.info.nbBedRoom, "Chambre")}</p>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="all2">
                    <div onClick={() => this.click()} className="content" data-aos='flip-right'>
                        <div className="top">
                            <img src={this.props.info.img} alt={this.props.info.city}/>
                        </div>
                        <div className="middle">
                            <div className="street">
                                <p>{this.props.info.address}</p>
                            </div>
                            <div className="city">
                                <p>{this.props.info.city} / {this.props.info.state}</p>
                            </div>
                            <div className="price">
                                <p>{this.props.info.dollar} $</p>
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="text">
                                <p>{this.props.info.squareFit} m²</p>
                                <p>•</p>
                                <p>{this.props.info.nbBathRoom} {plural(this.props.info.nbBathRoom, "Bain")}</p>
                                <p>•</p>
                                <p>{this.props.info.nbBedRoom} {plural(this.props.info.nbBedRoom, "Chambre")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Card;
function plural(nb, text) {
    if (nb > 1) return text+="s"
    else return text
}
