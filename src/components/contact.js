import React, {Component} from 'react';
import Icon from '../images/contact.svg';
import '../css/contact.css';
import axios from 'axios';

function Details(props) {
    return (<div className="contact--box">
            <div className="contact--icon">
                <img src={Icon} alt=""/>
            </div>
            <div className="contact--details">
                <div className="contact--details_fullname">{props.fullname} - <span>{props.position}</span></div>
                <div className="contact--details__phone"><span>tel:</span> <a href={"tel:" + props.phone}>{props.phone}</a></div>
                <div className="contact--details__mail"><span>email:</span> <a href={"mailto:" + props.mail}>{props.mail}</a></div>
            </div>
        </div>
    )
}

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            peoples: []
        };


    }
    componentDidMount() {
        const _this = this;
        axios.get(window.dataUrl)
            .then(function(res){
                const peoples = res.data.peoples;
                _this.setState({
                    peoples: peoples
                });
            })
            .catch(function(e) {
                console.log("ERROR ", e);
            })
    }
    render() {
        const renderItems = this.state.peoples.map(function(people, i) {
            return <Details key={i} fullname={people.title} position={people.position} phone={people.tel} mail={people.email} />
        });
        return (
            <div className="container contact">
                <div className="row">
                    <div className="col">
                        {renderItems}
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;