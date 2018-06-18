import React, {Component} from 'react';
import '../css/orange.css';

class Orange extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col orange">
                        <h2>Open Finance SA to <span>największa w Polsce</span> sieć Ekspertów Finansowych, <br/>którzy <span>już od 14 lat bezpłatnie pomagają</span> spełnić Klientom <span>marzenia o własnych "czterech kątach".</span><br/>Spółka jest także notowana na <span>GPW w Warszawie</span> od 2011 roku.</h2>
                    </div>
                </div>
            </div>
        )
    }
}
export default Orange;