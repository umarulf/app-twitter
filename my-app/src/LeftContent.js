import React from 'react';

function LeftContent() {
  return (
    <div className="left">
      <div className="left-content">
        <div>
          <i className="fas fa-search"></i>
          <h3 className="left-content-heading">Find your interests</h3>
        </div>
        <div>
          <i className="fas fa-user-friends"></i>
          <h3 className="left-content-heading">Explore what people are talking about</h3>
        </div>
        <div>
          <i className="fas fa-comment"></i>
          <h3 className="left-content-heading">Join the people</h3>
        </div>
      </div>
    </div>
  );
}

export default LeftContent;