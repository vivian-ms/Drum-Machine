import React from 'react';


const Volume = ( {volume, setVolume} ) => {
  const changeHandler = evt => {
    setVolume(evt.target.value);
    document.querySelector('output').innerHTML = `${Math.round(evt.target.value * 100)}`;
  }

  return (
    <form id="vol-container" className="form-inline d-flex mt-3">
      <label htmlFor="vol" className="form-label">Volume</label>
      <input type="range" id="vol" className="form-range flex-fill mx-2" min="0" max="1" step="0.05" defaultValue={volume} onChange={changeHandler} />
      <output htmlFor="vol">50</output>
    </form>
  );
};


export default Volume;
