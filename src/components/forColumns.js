import React, {Component} from 'react';
import '../css/fourColumns.css';
import axios from "axios/index";


function FourColumnsItem(props) {
    return(
        <div className="col-md-3">
            <div className="four">
                <img src={props.imgUrl} alt=""/>
                <p dangerouslySetInnerHTML={{ __html: props.htmlText }} /></div>
        </div>
    )
}

class FourColumns extends Component {
    constructor(props) {
        super(props);

        this.state = {
            earns: []
        };
    }
    componentDidMount() {
        const _this = this;
        axios.get(window.dataUrl)
            .then(function(res){

                const earns  = res.data.earn;

                _this.setState({
                    earns: earns
                });
            })
            .catch(function(e) {
                console.log("ERROR ", e);
            })
    }
    render() {
        const renderItems = this.state.earns.map(function(earn, i) {
            return <FourColumnsItem key={i} imgUrl={earn.image} htmlText={earn.text} />
        });
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h2 className="four--columns__h2">Możesz tylko zyskać!</h2>
                    </div>
                    {renderItems}

                </div>
            </div>
        )
    }
}

export default FourColumns;