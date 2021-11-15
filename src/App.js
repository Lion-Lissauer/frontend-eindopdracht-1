import React from 'react';
import {useState, useEffect} from "react";
import axios from 'axios';
// import Rijksmuseum from "./components/Rijksmuseum/Rijksmuseum";
import SearchField from "./components/SearchField/SearchField";
import './App.css';

const apiKey = '5TRRnpGR';


function App() {
    const [ artObjectsData, setArtObjectsData ]  = useState({});
    const [ objectNumber, setObjectNumber ] = useState('')
    // const [ endpoint, setEndpoint] = useState(`https://www.rijksmuseum.nl/api/nl/collection?key=5TRRnpGR`)

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(`https://www.rijksmuseum.nl/api/nl/collection?q=${objectNumber}&key=${apiKey}`);
                console.log(result.data);
                setArtObjectsData(result.data)
            } catch (e) {
                console.error(e)
            }
        }

        if (objectNumber) {
            fetchData();
        }
    }, [objectNumber]);

    return (
        <div className="result-container">
            <div className="result-header">
                <SearchField setObjectNumberHandler={setObjectNumber}/>

                {/*{error && <span className="no-result-error">Geen resultaat</span>}*/}

                <span className="art-objects">
                        {Object.keys(artObjectsData).length > 0 &&
                        <>
                            <img alt="{artObjectsData.name}" src={artObjectsData.artObjects[0].webImage.url} width="30%" height="30%"/>
                            <h1><strong>{artObjectsData.artObjects[0].longTitle}</strong></h1>
                            <h2><strong>{artObjectsData.artObjects[0].description}</strong></h2>
                            <h3>{artObjectsData.artObjects[0].description}</h3>
                        </>
                        }
                    </span>
            </div>
        </div>
    );
}

export default App;
