import React from 'react';

const SmartText = ({ text, length = 120 }) => {
  const [showLess, setShowLess] = React.useState(true);

  if (text.length < length) {
    return <p>{text}</p>;
  }

  return (
    <div>
      <p style={{ marginBottom: '10px' }}>
        {showLess ? `${text.slice(0, length)}...` : text}
      </p>
      <a
        style={{ color: 'blue', cursor: 'pointer' }}
        onClick={() => setShowLess(!showLess)}
      >
        Show {showLess ? 'more' : 'less'}
      </a>
    </div>
  );
};

export default SmartText;
