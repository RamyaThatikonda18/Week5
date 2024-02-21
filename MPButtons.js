import React, { Component } from 'react';
import './MusicPlayer1.css';
import './Music_Player1.js';
export default class MPHeader extends Component {
    render() {
        return(
            <div>

                <div className='buttonctrl'>
                    <button type='button' className='button' id="prev-btn">&lt;&lt;</button>
                    <button type='button' className='button' id="play-btn">&#9658;</button>
                    <button type='button' className='button' id="pause-btn">&#10074;&#10074;</button>
                    <button type='button' className='button' id="next-btn">&gt;&gt;</button>
                </div>
            </div>
        )

    }
    
}