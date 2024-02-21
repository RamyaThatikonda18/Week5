import React, { Component } from 'react';
import './MusicPlayer1.css';
import './Music_Player1.js';
export default class MPHeader extends Component {
    render() {
        return(
            <div>
                <div className='progressBar'>
                    <div id="progress" className='progress'></div>
                </div>
            </div>
        )
    }
}