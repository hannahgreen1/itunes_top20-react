import React from 'react';


const MusicDetails = (props) => {
  console.log(props);
   if (props.songs.length === 0) return null;
  return (
    <div>
      {/* <h3>Title: {props.songs.title.label}</h3> */}
      <p>Artist: {props.songs[1]['im:artist'].label}</p>
    </div>
  );
}

export default MusicDetails;
