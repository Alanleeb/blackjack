import React, { Component } from 'react';

import './player.styles.scss';

import CustomButton from '../custom-buttons/custom-button.component'
import PlayingCards from '../playing-cards/playing-cards.compnent'

class Player extends Component {
    constructor(props){
        super(props);

        this.state = {
            cards: [],
            playerCards: [],
            num: 0,
            numberOfPlayers: {id:'1'},
        }
    }


   
    handleClick = () => {
        if(this.state.num > 21) {    
            alert("BUST")
        }  
        const randNum = Math.floor(Math.random() * Math.floor(13));
        this.setState({ num: this.state.num + this.props.cards[randNum].value})
        this.setState(state => {state.playerCards.push(this.props.cards[randNum].type)}) 
    }


    handleHold = () => {
        if (this.state.num < 21 ) {
            alert('WINNER')
        } else {
            alert('YOU LOSE')
        }
    }
    render() {
       
        return(
            <div className="player-card">
            {console.log(this.state.playerCards)}
                <div>PLAYER {this.state.numberOfPlayers.id}</div>
                <div className="card-holder">
                <PlayingCards 
                    id={this.state.key}
                    cards={this.state.playerCards} 
                    />
            </div>
            <div>{this.state.num}</div>
            <div className="player-controls">
                <CustomButton onClick={this.handleClick}>Hit</CustomButton>
                <CustomButton onClick={this.handleHold}>Hold</CustomButton>
            </div> 
            </div>
        )
    }
}
export default Player;