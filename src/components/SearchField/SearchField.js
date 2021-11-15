// import { Link } from 'react-router-dom';
import React, {useState, useEffect} from 'react';

function SearchField({setObjectNumberHandler}) {
    const [query, setQuery] = useState('');

    function onFormSubmit(e) {
        e.preventDefault();
        console.log('submitted!');

        setObjectNumberHandler(query);
    }

    return (
        <form className="search-field" onSubmit={onFormSubmit}>
            <input
                type="text"
                name="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Zoekterm"
            />

            <button type="submit">
                Zoeken
            </button>
        </form>
    );
}

export default SearchField;