import React, { Component } from 'react';

import './player-controls.styles.scss';

import CustomButton from '../custom-buttons/custon-button.component';


class PlayerControls extends Component {

    render(){

        return(
    <div className="player-controls">
        <CustomButton >Hit</CustomButton>
        <CustomButton>Hold</CustomButton>
    </div>
        )
    }
}
export default PlayerControls;