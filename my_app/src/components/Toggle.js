import React, { useState } from 'react';


const Toggle = ( {bankSelected} ) => {
  const [bank, setBank] = useState('bank_1');

  const changeHandler = evt => {
    if (evt.target.value === 'bank_1') {
      setBank('bank_1');
      bankSelected('bank_1');
    } else {
      setBank('bank_2');
      bankSelected('bank_2');
    }
  };

  return (
    <form id="toggle" className="d-flex justify-content-between mt-3">
      <div className="btn-group-toggle" data-toggle="buttons">
        <label className={`btn btn-primary ${bank === "bank_1" ? "active active-label" : ""}`}>
          <input type="radio" value="bank_1" checked={bank === 'bank_1'} onChange={changeHandler} />
          Heater Kit
        </label>
      </div>
      <div className="btn-group-toggle" data-toggle="buttons">
        <label className={`btn btn-primary ${bank === "bank_2" ? "active active-label" : ""}`}>
          <input type="radio" value="bank_2" checked={bank === 'bank_2'} onChange={changeHandler} />
          Smooth Piano Kit
        </label>
      </div>
    </form>
  );
};


export default Toggle;
