import React from 'react';
import {useState, useEffect} from "react";
import axios from "axios";
// import Rijksmuseum from "./components/Rijksmuseum/Rijksmuseum";
import SearchField from "./components/SearchField/SearchField";
import './App.css';

const apiKey = 'RNGVwSHj';

function App({RijksmuseumUrl}) {
    const [ collectionData, setCollectiondata ]  = useState([]);
    const [ type, setType ] = useState('')
    const [ endpoint, setEndpoint] = useState('https://www.rijksmuseum.nl/api/nl/collection?key=RNGVwSHj&q=${type}')

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(endpoint);
                console.log(result.data);
                setCollectiondata(result.data)
            } catch (e) {
                console.error(e)
            }
        };

        if (endpoint) {
            fetchData();
        }
    }, [endpoint]);

    return (
        <div className="result-container">
            <div className="result-header">
                <SearchField setTypeHandler={setType}/>

                {/*{error && <span className="no-result-error">Geen resultaat</span>}*/}

                <span className="collectie">
                        {Object.keys(collectionData).length > 0 && <>
                            <img alt="Image" src={collectionData.url} width="300" height="500"/>
                            <h1><strong>{collectionData.title} " - " {collectionData.artObject.dating}</strong></h1>
                            <h2><strong>{collectionData.name}</strong></h2>
                            <h3>{collectionData.artObject.description}</h3></>}
                    </span>
            </div>
        </div>
    );
}

export default App;
