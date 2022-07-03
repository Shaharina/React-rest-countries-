import React, { useEffect, useState } from 'react';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => setCountries(data));
    }, []);

    return (
        <div>
            <h1>Hello From Countries: {countries.length} </h1>

            {countries.map(country => console.log(country))}
        </div>
    );
};

export default Countries;
