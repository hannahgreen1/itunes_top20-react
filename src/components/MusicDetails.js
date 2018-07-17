import React from 'react';


const MusicDetails = (props) => {
  console.log(props);
  if (props.songs.length === 0) return null;
 const options = props.songs.map((song) => {
 return <li>{song['im:artist'].label}</li>
})
 console.log(props.songs);
 return(
   <div>
     <h3> Music Chart</h3>
    <ol>
     {options}
   </ol>
   </div>
 )
}


export default MusicDetails;
