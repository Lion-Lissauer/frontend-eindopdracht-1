import React, {useEffect, useState} from 'react';
import axios from "axios";
import './Rijksmuseum.css';

const apiKey = 'RNGVwSHj';

function Rijksmuseum()  {
    const [ rijksmuseum, setRijksmuseum ] = useState(null);
    const [ search, setSearch ] = useState('');

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(`https://www.rijksmuseum.nl/api/nl/collection?key=${apiKey}&q=${search}`);
                console.log(result.data);
                console.log(result.data.moves.length);
                console.log(result.data.weight);
                console.log(result.data.abilities);
                setRijksmuseum(result.data);
            } catch (e) {
                console.error(e)
            }
        }
        fetchData();
    }, [])

    return (
        <div>
            {rijksmuseum &&
            <>
                <h2>{rijksmuseum.name}</h2>
                {/*<img alt="Image" src={pokemon.sprites.front_default}/>*/}
                {/*<p><strong>Moves: </strong>{pokemon.moves.length}</p>*/}
                {/*<p><strong>Weight: </strong>{pokemon.weight}</p>*/}
                {/*<p><strong>Abilities: </strong></p>*/}
                {/*<ul>*/}
                {/*    {rijksmuseum.abilities.map((ability) => {*/}
                {/*        return (*/}
                {/*            <li key={ability.ability.name}>*/}
                {/*                {ability.ability.name}*/}
                {/*            </li>*/}
                {/*        )*/}
                {/*    })}*/}
                {/*</ul>*/}
            </>
            }
        </div>
    );
}

export default Rijksmuseum;