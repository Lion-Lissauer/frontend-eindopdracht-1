import React from 'react';
import {useState, useEffect} from "react";
import Rijksmuseum from "./components/Rijksmuseum/Rijksmuseum";
import axios from "axios";
import './App.css';

function App() {
  const [ rijksmuseum, setRijksmuseum ]  = useState([]);
  const [ endpoint, setEndpoint] = useState('https://www.rijksmuseum.nl/api/nl/collection?key=RNGVwSHj')

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get(endpoint);
        console.log(result.data);
        setRijksmuseum(result.data)
      } catch (e) {
        console.error(e)
      }
    }
    fetchData();
  }, [endpoint])

  return (
      <div className="collectie">
        {rijksmuseum &&
        <>
          {Object.keys(rijksmuseum).length > 0 && <div>{rijksmuseum.results.map((rijksmuseumId) => {
                return (
                    <Rijksmuseum rijksmuseumId={rijksmuseumId.url}/>
                )
              }
          )};
          </div> }
        </>
        }
      </div>
  );
}

export default App;
