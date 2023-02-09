import React, { useState } from 'react';
import splitString from '../utils';
import { Badge } from 'flowbite-react';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="text-6xl text-red-600">{count}</div>
      <button
        className="px-6 py-2 rounded bg-green-800 hover:bg-green-600 text-white"
        type="button"
        onClick={() => setCount(count + 1)}
      >
        count+
      </button>
      <br />
      <br />
      {splitString('asd-asd', 's').join('')}
      <br />
      <br />
      <br />
      <Badge size="sm" color="failure">
        aaa
      </Badge>
    </>
  );
};

export default Counter;
