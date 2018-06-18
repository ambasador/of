import React, {Component} from 'react';
import '../css/fourLines.css';
import axios from "axios/index";

function FourItem(props) {
    return(
        <div className="col-md-3">
            <div className="four--lines__box">
                <img src={props.imgUrl} alt=""/>
                <p dangerouslySetInnerHTML={{ __html: props.htmlText }} /></div>
        </div>
    )
}

class Four extends Component{
    constructor(props) {
        super(props);

        this.state = {
            experts: []
        };
    }
    componentDidMount() {
        const _this = this;
        axios.get(window.dataUrl)
            .then(function(res){

                const experts  = res.data.expert;

                _this.setState({
                    experts: experts
                });
            })
            .catch(function(e) {
                console.log("ERROR ", e);
            })
    }
    render(){
        const renderItems = this.state.experts.map(function(expert, i) {
            return <FourItem key={i} imgUrl={expert.image} htmlText={expert.text} />
        });
        return(
            <div className="container four--lines">
                <div className="row">
                    <div className="col-xs-12">
                        <h2 className="header">Eksperci Finansowi Open Finance, pomagają klientom w uzyskaniu:</h2>
                    </div>
                </div>
                <div className="row">
                    {renderItems}
                </div>
            </div>
        )
    }
}

export default Four;