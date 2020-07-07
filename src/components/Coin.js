import React from 'react';
import "./CoinStyles.css";
import CoinTura from "../1-lira-tura.png";
import CoinYazi from "../1-lira-yazi.png";

const Coin = (props) => {
    const {currentStatus, donuyor} = props;
    return (
        <div className="Coin-container">
            <div className={`Coin ${props.donuyor && "Coin-rotate"}`}>
                <img src={CoinTura} 
                    className= {
                        props.currentStatus === "yazi" ? "coin-back" : "Coin-front"
                    } 
                />
                <img src={CoinYazi}
                    className= {
                        props.currentStatus === "yazi" ? "coin-front" : "Coin-back"
                    }
                />
             
            </div>
            
        </div>
    );
};

export default Coin;