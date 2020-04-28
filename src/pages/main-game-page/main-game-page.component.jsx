import React, { Component } from 'react';

import './main-game-page.styles.scss';
import Player from '../../components/player/player.component';
import Dealer from '../../components/dealer/dealer.component';
import CustomButton from '../../components/custom-buttons/custom-button.component';

class MainGamePage extends Component {
    constructor(){
        super();

        this.state = {
            cards: [
                {type: "K",value:10},{type: "Q",value:10},{type: "J",value:10},{type: "A",value:11},
                {type: "2",value:2},{type: "3",value:3},{type: "4",value:4},{type: "5",value:5},
                {type: "6",value:6},{type: "7",value:7},{type: "8",value:8},{type: "9",value:10},
                {type: "10",value:10}
            ],
            deltCardsToPlayer: [],
            deltCardsToDealer: [],
            deal: false
        }
    }

    handleClick = () => {
        let cardsDeltToPlayer = []
        let cardsDeltToDealer = []
            for( let index = 0; index < 2; index++) {
            let randNum = Math.floor(Math.random() * Math.floor(13));
            cardsDeltToPlayer.push(this.state.cards[randNum])
            }
            for( let index = 0; index < 2; index++) {
                let randNum = Math.floor(Math.random() * Math.floor(13));
                cardsDeltToDealer.push(this.state.cards[randNum])
            }
        this.setState({deal: true})
        this.setState({deltCardsToPlayer: cardsDeltToPlayer })
        this.setState({deltCardsToDealer: cardsDeltToDealer })
    }


    render(){
        return(

    <div className="game-layout">
        <div className="header">
            <CustomButton onClick={this.handleClick}>Deal</CustomButton>
            <div className="dealer"> 
                <Dealer  
                deal={this.state.deal} 
                deltCards={this.state.deltCardsToDealer} 
                cards={this.state.cards}/>
            </div>
        </div>
        <div className="game-name">Mindfire  Blackjack</div>
            <div className="players">
                <Player 
                deal={this.state.deal}
                deltCards={this.state.deltCardsToPlayer} 
                cards={this.state.cards}/>
            </div>
        <div className="footer" />         
    </div>

    )}
}

export default MainGamePage;