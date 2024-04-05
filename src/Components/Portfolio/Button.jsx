import React, { useState } from 'react';

const DummyComponent = () => {
  const [data, setData] = useState([
    { id: 1, name: 'Link 1', url: 'https:facebook.com' },
    { id: 2, name: 'Link 2', url: 'https://example.org' },
  ]);

  const handleClick = (id) => {
    setData(data.map(item => item.id === id ? { ...item, target: '_blank' } : item));
  };

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>
          <a href={item.url} target={item.target}>{item.name}</a>
          <button onClick={() => handleClick(item.id)}>Go To See</button>
        </div>
      ))}
    </div>
  );
};

export default DummyComponent;
