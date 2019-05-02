import React, { useState, useEffect, Fragment } from 'react';
import Form from './components/Form';
import Song from './components/Song';
import Data from './components/Data';

import axios from 'axios';

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

    setArtist(artista);

    setLyrics(resp.data.lyrics);    
  }

  const requestDataAPI = async () => {
    if (artist) {
      const url = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${ artist }`;
      const resp = await axios(url);

      setData(resp.data.artists[0]);
    }
  }

  useEffect(
    () => {
      requestDataAPI();
    }, [artist]
  )

  return (
    <Fragment>
      <Form
        requestLyricsAPI={ requestLyricsAPI }
      />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Data
              data={ data }
            />
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
