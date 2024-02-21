import React, { Component } from 'react';
import './MusicPlayer1.css';
import './Music_Player1.js';
export default class MPHeader extends Component {
    render() {
        return(
            <div> 
                <audio id='audio-player' src='song1.mp3'></audio>
                <div className='currentSong'>
                    <p id='id1'>Ready to play song..</p>
                </div>
            </div>
        )
    }
}