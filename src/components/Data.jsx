import React from 'react';

function Data({data}) {
    if(Object.keys(data).length === 0) return null;

    return(
        <div className="card border-light">
            <div className="card-header bg-primary text-light font-weight-bold">
                Información Artista
            </div>
            <div className="card-body">
                <img src={data.strArtistThumb} alt="LOGO artista"/>
                <p className="card-text">Género: { data.strGenre }</p>
                <h2 className="card-text text-center">Biografía</h2>
                <p className="card-text">{ data.strBiographyES }</p>
                <p className="card-text">
                    <a href={ `https://${data.strFacebook}` } target="__blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href={ `https://${data.strTwitter}` } target="__blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href={ data.strLastFMChart } target="__blank" rel="noopener noreferrer">
                        <i className="fab fa-lastfm"></i>
                    </a>
                </p>
            </div>
        </div>
    ) 
}

export default Data;
