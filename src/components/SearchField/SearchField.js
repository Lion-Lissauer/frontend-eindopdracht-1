// import { Link } from 'react-router-dom';
import React, {useState, useEffect} from 'react';

function SearchField({setTypeHandler}) {
    const [query, setQuery] = useState('');

    function onFormSubmit(e) {
        e.preventDefault();
        console.log('submitted!');

        setTypeHandler(query);
    }

    return (
        <form className="search-field" onSubmit={onFormSubmit}>
            <input
                type="text"
                name="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Zoek item"
            />

            <button type="submit">
                Zoek
            </button>
        </form>
    );
}

export default SearchField;