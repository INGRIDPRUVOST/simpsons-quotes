// src/components/DisplayEmployee.js
import React from 'react';
  
function Quotes({ quote }) {
  return (
    <div className="Quotes">
      <img
        src={quote.image}
        alt={quote.name}
      />
        <div>
            {quote.character}
        </div>
            <div>
                {quote.quote}
            </div>
    </div>
  );
};
  
export default Quotes;