import React from 'react';
import './Country.css';

const Country = props => {
    // console.log(props.country);
    const { area, region, population, name, flags, coatOfArms, capital, timezones } = props.country;

    return (
        <div className='country'>
            <h2>Country Name: {name.common}</h2>
            <p>National Flag</p>
            <img src={flags.png} alt='Flag' />
            <p>Population: {population}</p>
            <p>
                <small>Area: {area}</small>
            </p>
            <p>Coat Of Arms</p>
            <img src={coatOfArms.png} alt='' />
            <p>Capital: {capital}</p>
            <p>
                <small>Region :{region}</small>
            </p>
            <hr />
            <h5>
                <i>TimeZone:{timezones}</i>
            </h5>
        </div>
    );
};

export default Country;
