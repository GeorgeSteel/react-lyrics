import React, { useState, useEffect, Fragment } from 'react';
import Form from './components/Form';

function App() {
  // use 3 different states
  const [artist, setArtist] = useState('');
  const [lyrics, setLyrics] = useState([]);
  const [data, setData] = useState({});

  // request songs API method
  const requestLyricsAPI = search => {
    const url = `https://api.lyrics.ovh/v1/${ search.artist }/${ search.cancion }`;

  }

  return (
    <Fragment>
      <Form
        requestLyricsAPI={ requestLyricsAPI }
      />
    </Fragment>
  );
}

export default App;
