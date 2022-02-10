import React from 'react';
import Pracownik_2 from './Workers/Pracownik_2';
import Pracownik_1 from './Workers/Pracownik_1';


const Workers = () => {
  return  (
  <div id="specialists"> 
  <h2>Nasi specjaliści</h2>
  <Pracownik_1/>     
  <Pracownik_2/>
</div>
);};

export default Workers;
