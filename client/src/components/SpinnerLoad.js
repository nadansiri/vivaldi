import React from "react";
import { Spinner } from "react-bootstrap";


const SpinnerLoad = () => {
  return (
    <div className="SpinnerLoad">
      
      <Spinner animation="border" role="status" variant="info">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <h4 style={{color:"#17a2b8"}}>Loading...</h4>
    </div>
  );
};

export default SpinnerLoad;
