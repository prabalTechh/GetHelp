import React from 'react';

const List = ({ title, list }) => {
  return (
    <div>
      <h4 className="font-bold mb-2">{title}</h4>
      <ul>
        {list.map((item, index) => (
          <li key={index} className="text-gray-200">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
