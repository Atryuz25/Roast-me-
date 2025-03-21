import React from 'react';

const RoastResponse = ({ roast, isLoading }) => {
  return (
    <div className="roast-response">
      {isLoading ? (
        <p>
          <i className="fas fa-spinner fa-spin"></i> Generating roast...
        </p>
      ) : roast ? (
        <p>
          <i className="fas fa-skull-crossbones"></i> {roast}
        </p>
      ) : null}
    </div>
  );
};

export default RoastResponse;