import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Search = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]); 

    useEffect(() => {

        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php',
                {
                    params: {
                        action: 'query',
                        list: 'search',
                        origin: '*',
                        format: 'json',
                        srsearch: term
                    }
                }
            );
            setResults(data.query.search);
        };

        const t = setTimeout(() => {
            if (term) {
                search();
            }
        }, 1000);

        return ( () => clearTimeout(t));

    }, [term]);

    const renderedResults = results.map((r) => {
        return (
            <div key={r.pageid} 
                className="item">
                <div className="content">
                    <div className="header">
                        {r.title}
                    </div>
                    {r.snippet}
                </div>

            </div>
        );
    });

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                        className="input" />
                </div>
            </div>
            {renderedResults}
        </div>
    );
}

export default Search;