import React, { useState } from 'react';

import Grudges from './Grudges';
import NewGrudge from './NewGrudge';

import initialState from './initialState';

const App = () => {
  const [grudges, setGrudges] = useState(initialState);

  const addGrudge = grudge => {
    grudge.id = grudges.length+1;
    grudge.forgiven = false;
    setGrudges([grudge, ...grudges]);
  };

  const toggleForgiveness = id => {
    /**** version -1 */
    // const n = grudges.findIndex(item => item.id === id)
    // let temp_state = [...grudges];
    // let temp_element = { ...grudges[n] };
    // temp_element.forgiven = !temp_element.forgiven;
    // temp_state[n] = temp_element
    // setGrudges(temp_state );

    /**** version -2 */
    setGrudges(
      grudges.map(grudge => {
        if (grudge.id !== id) return grudge;
        return { ...grudge, forgiven: !grudge.forgiven };
      })
    );
  
  };

  console.log(grudges)
  return (
    <div className="App">
      <NewGrudge onSubmit={addGrudge} />
      <Grudges grudges={grudges} onForgive={toggleForgiveness} />
    </div>
  );
};

export default App;
