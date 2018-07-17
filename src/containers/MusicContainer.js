import React from 'react';
import MusicDetails from '../components/MusicDetails';


class MusicContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      songs: []
    };
  }
  componentDidMount(){
    console.log('componentDidMount');
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';

    fetch(url)
    .then(response => response.json() )
    .then(songs => this.setState({songs: songs.feed.entry}))
    .catch(err=> console.error(err));
  }

  render(){
      return (
        <div>
          <h2>Top 20 Songs</h2>
          <MusicDetails songs = {this.state.songs}/>
        </div>
      );
    }
};

export default MusicContainer;
