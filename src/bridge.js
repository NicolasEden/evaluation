import React from 'react';
import Loading from './loading';
import Appartements from './appartements';
import Error from './error';
class Bridge extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "apparts": null
        }
    }
    componentDidMount() {
        if (window.location.pathname === "/apparts") {
            window.location.href = "/apparts/0"
        }
        if (window.location.pathname === "/apparts/all") {
            fetch(`http://92.222.69.104/appartement/all?size=80&page=0`).then(res => res.json()).then(async(result) => {
                if (result) {
                    if (result.content.length > 1) {
                        this.setState({
                            "apparts": result
                        })
                    } else {
                        this.setState({
                            "apparts": "too far"
                        })
                    }
                } else {
                    this.setState({
                        "apparts": "loading"
                    })
                }
            })
        } else {
            fetch(`http://92.222.69.104/appartement/all?size=6&page=${window.location.pathname.split(`/apparts/`).join(``)}`).then(res => res.json()).then(async(result) => {
                if (result) {
                    if (result.content.length > 1) {
                        this.setState({
                            "apparts": result
                        })
                    } else {
                        this.setState({
                            "apparts": "too far"
                        })
                    }
                } else {
                    this.setState({
                        "apparts": "loading"
                    })
                }
            })
        }
    }
    render() {
        if (this.state.apparts === null) {
            return (
                <Loading/>
            );
        } else {
            if (this.state.apparts !== "too far") {
                return (
                    <Appartements info={this.state.apparts}/>
                );
            } else if (this.state.apparts === "loading") {
                return (
                    <Error text="Une erreur est survenue durant le chargement."/>
                )
            } else {
                return (
                    <Error text="Notre liste d'appartement n'est pas assez grande pour afficher ceci."/>
                );
            }
        }
    }
}

export default Bridge;
