import React, { useRef, useState } from "react";
import './style.css';

const Search = () => {
    const ref = useRef(null);

    const [ title, setTitle ] = useState("");
    const [ result, setResult ] = useState([]);

    const handleSearch = () => {
        fetch(`https://www.cheapshark.com/api/1.0/games?title=${title}&limit=3&exact=0`)
        .then((res) => res.json())
        .then((data) => {
            setResult(data);
        })
        ref.current.value = '';
    }

    return (
        <div className="container-search">
            <h1>Search For A Game!</h1>
            <input ref={ref} type="text" onChange={(event) => setTitle(event.target.value)} placeholder="search for Minecraft..." />
            <button onClick={() => {handleSearch()}}> Search Game Title </button>
            <div className="game-container">
                {result.map((title, key) => {
                    return (
                    <div key={key} className="game-card">
                        {title.external}
                        <img src={title.thumb} alt="game-cover" />
                        {title.cheapest}
                    </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Search;