import React, { Component } from 'react';
import './MusicPlayer1.css';
import './Music_Player1.js';
export default class MPHeader extends Component {
    render() {
      return (
        <div>
          <div className='songslist'>
            <ul className='songs'>
                <li>Song1</li>
                <li>Song2</li>
                <li>Song3</li>
                <li>Song4</li>
                <li>Song5</li>
            </ul>

          </div>
        </div>
      )
    }
}