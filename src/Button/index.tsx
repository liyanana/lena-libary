import React, { useState, type FC } from 'react';

const Button: FC<{ title: string }> = (props) => {
  const [number, setnumber] = useState(0);
  return (
    <div>
      <h1>{props.title}</h1>
      <h4
        onClick={() => {
          setnumber((number) => number + 1);
        }}
        style={{ background: 'lightpink' }}
      >
        点击+1
      </h4>
      {number}
    </div>
  );
};

export default Button;
