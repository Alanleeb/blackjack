import React, { Component } from 'react';

import './dealer.styles.scss';

import PlayingCards from '../playing-cards/playing-cards.compnent'

class Dealer extends Component {
    constructor(props){
        super(props);

        this.state = {
            cards: [],
            dealerCards: [],
            num: 0
        }    
       
    }      

    render() {
        if(this.props.deal === true){
            this.setState(state => {state.dealerCards.push(this.props.deltCards)})
        }
        return(
            <div className="player-card">
            <div>DEALER</div>
            <div className="card-holder">
                <PlayingCards 
                cards={this.state.dealerCards} 
                />
            </div>
            <div>{this.state.num}</div>
            </div>
        )
    }
}
export default Dealer;