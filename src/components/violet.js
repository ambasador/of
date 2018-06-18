import React, {Component} from 'react';
import '../css/violet.css';
import axios from "axios/index";

function Line(props) {
    return(
        <div className="col-md-4">
            <div className="there">
                <img src={props.imgUrl} alt=""/>
                <p dangerouslySetInnerHTML={{ __html: props.htmlText }} /></div>
        </div>
    )
}

class violet extends Component {
    constructor(props) {
        super(props);

        this.state = {
            banks: []
        };
    }
    componentDidMount() {
        const _this = this;
        axios.get(window.dataUrl)
            .then(function(res){

                const banks  = res.data.banks;

                _this.setState({
                    banks: banks
                });
            })
            .catch(function(e) {
                console.log("ERROR ", e);
            })
    }
    render() {
        const renderItems = this.state.banks.map(function(bank, i) {
            return <Line key={i}  imgUrl={bank.image} htmlText={bank.text} />
        });

        return (
            <div className="violet">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Zobacz, dlaczego warto skorzystać z pomocy <br/>
                                naszych Ekspertów Finansowych:</h2>
                        </div>
                        {renderItems}

                    </div>
                </div>
            </div>
        )
    }
}

export default violet;