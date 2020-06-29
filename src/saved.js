import React from 'react';
import Line from './Assets/line.png'
import Card from './card';
import cookie from 'react-cookies'
import AOS from 'aos';
import 'aos/dist/aos.css';
class Save extends React.Component {
    componentDidMount(){
        AOS.init({
            duration : 2000
        })
      }
    render() {
        var cookies = null;
        if (cookie.load('informations')) {
            cookies = cookie.load('informations')
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
                                    <li><a href="/saved">Saved Cards</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="logo">
                            <img src="https://i.imgur.com/OosBQlR.png" alt="logo"></img>
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
                                <p><a href="/saved">Saved Cards</a></p>
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
                            {cookies.map((item, i) => (
                                <Card info={item} />
                            ))}
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <h1>Vous n'avez pas sauvgarder d'appartements :'(</h1>
            )
        }
    }
}

export default Save;
