import React from "react";
import { Spinner } from "react-bootstrap";


const SpinnerLoad = () => {
  return (
    <div className="SpinnerLoad">
      
      <Spinner animation="grow" role="status" variant="info"/>
      <Spinner animation="grow" role="status" variant="info"/>
      <Spinner animation="grow" role="status" variant="info"/>
      <h4 style={{color:"#17a2b8"}}>Loading...</h4>
    </div>
  );
};

export default SpinnerLoad;
