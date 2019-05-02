import React, { useState, useEffect, Fragment } from 'react';
import Form from './components/Form';

import axios from 'axios';
import Song from './components/Song';

function App() {
  // use 3 different states
  const [artist, setArtist] = useState('');
  const [lyrics, setLyrics] = useState([]);
  const [data, setData] = useState({});

  // request songs API method
  const requestLyricsAPI = async search => {
    const { artista, cancion } = search;
    const url = `https://api.lyrics.ovh/v1/${ artista }/${ cancion }`;
    const resp = await axios(url);

    setLyrics(resp.data.lyrics);
  }

  return (
    <Fragment>
      <Form
        requestLyricsAPI={ requestLyricsAPI }
      />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">

          </div>
          <div className="col-md-6">
            <Song
              lyrics={ lyrics }
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
