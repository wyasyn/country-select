import React, { useState } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import Geosuggest from '@ubilabs/react-geosuggest';
import './App.css'

const LocationSelector = () => {
  const [country, setCountry] = useState(null);
  const [state, setState] = useState(null);
  const [subCounty, setSubCounty] = useState(null);

  const countries = countryList().getData();

  const handleCountryChange = (selectedOption) => {
    setCountry(selectedOption);
    setState(null); // Reset state and sub-county when country changes
    setSubCounty(null);
  };

  const handleStateChange = (selectedOption) => {
    setState(selectedOption);
    setSubCounty(null); // Reset sub-county when state changes
  };

  const handleSubCountyChange = (suggest) => {
    setSubCounty(suggest);
  };

  return (
    <div className="location-selector">
      <Select
        options={countries}
        value={country}
        onChange={handleCountryChange}
        placeholder="Select Country"
        classNamePrefix="react-select"
      />
      {country && (
        <Geosuggest
          placeholder="Select State/District"
          onSuggestSelect={handleStateChange}
        />
      )}
      {state && (
        <Geosuggest
          placeholder="Select Sub-County"
          onSuggestSelect={handleSubCountyChange}
        />
      )}
    </div>
  );
};

export default LocationSelector;

