import React, { Component } from "react";
import MPHeader from './MPHeader';
import './MusicPlayer1.css';
import './Music_Player1.js';
import MPSongsList from './MPSongsList';
import MPSongs from './MPSongs';
import MPProgressBar from './MPProgressBar';
import MPButtons from './MPButtons';
import MPDisplayCurrentSong from "./MPDisplayCurrentSong.js";
export default class MusicPlayer extends Component {
    render() {
      return (
        <div className='container'>
            <MPHeader />
            <MPSongsList />
            <MPSongs />
            <MPProgressBar />
            <MPDisplayCurrentSong />
            <MPButtons />
          

        </div>
      )
    }
}
