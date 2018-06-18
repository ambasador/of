import React, {Component} from 'react';
import svgline from  '../images/line.svg';

class Line extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <img src={svgline} alt="" className="img"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Line;