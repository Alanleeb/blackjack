import React, { Component }from 'react'

import './playing-cards.styles.scss';

class PlayingCards extends Component {
    constructor(props) {
        super(props)

        this.state = {
           card: []
        }
    }
    
    

    render(){
        return(
            <div className="card-wrapper">
                
                {   
                this.props.cards.map(card => (
                    <div className="card">
                        <div className="card-value" key={this.props.key}>
                            {card}
                        </div>
                    </div> 
                ))} 
            </div>)
            
    
            
        
    }
}
export default PlayingCards;