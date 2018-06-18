import React, {Component} from 'react';
import '../css/topText.css';

class topText extends Component{
    render(){
        return(
           <div className="container">
             <div className="row">
                <div className="col-sm-12"> <div className="slogan">
                <h4>Zależy nam na wsparciu Państwa w uzyskaniu <strong>finansowania na zakup wymarzonego mieszkania</strong>, dlatego <br/>współpracujemy z najlepszymi Ekspertami Finansowymi na rynku nieruchomości. Eksperci Finansowi<br/>z Open Finance <strong>bezpłatnie, profesjonalnie i co najważniejsze – skutecznie, przeprowadzą Państwa <br/>przez cały proces kredytowy.</strong></h4>
            </div></div>
             </div>
           </div>
        )
    }
}
export default topText;