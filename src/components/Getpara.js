import React, { useState } from 'react';


function Getpara() {
  
  let [x,display] = useState(null);
  // console.log(x);
  return <div>
    <button onClick= {() => display(x = <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy.</p>)} id="click">click</button> ;
    {/* <p id="para">{x}</p> */ x}
    </div>
}

export default Getpara