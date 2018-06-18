import React, {Component} from 'react';
import axios from 'axios';
import '../css/headButton.css';

class HeadButton extends Component{
    constructor(props) {
        super(props);

        this.state = {
            hashUrl: []
        };
        this.state = {
            buttonText: []
        };

    }

    componentDidMount() {
        const _this = this;
        axios.get(window.dataUrl)
            .then(function(res){
                const hashUrl = res.data.hashUrl;
                const buttonText = res.data.buttonText;

                _this.setState({
                    hashUrl: hashUrl
                });
                _this.setState({
                    buttonText: buttonText
                });

            })
            .catch(function(e) {
                console.log("ERROR ", e);
            })
    }
    render(){
        const theHash = this.state.hashUrl;
        const theText= this.state.buttonText;
        return(
            <div className="container">
                <div className="row">
                    <div className="col head--button">
                        <h2>Skorzystaj z pomocy Ekspertów Finansowych</h2>
                       <div className="button">
                           <a type="button" className="button" href={theHash}>{theText} </a>
                       </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default HeadButton;