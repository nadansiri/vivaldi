import React from "react";
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';

const OpeningHours = () => {
  const isItOpen = () => {
    var isopen = false;
    var d = new Date();
    var hr = d.getHours();
    var n = d.getDay();
    
    n === 0 && hr > 9 && hr < 18
      ? (isopen = true)
      : (hr > 9 && hr < 12) || (hr > 15 && hr < 18)
      ? (isopen = true)
      : console.log("we're closed");
    return isopen ? (
      <div>
        <QueryBuilderIcon color="secondary" />
        <span>{`${new Date().toLocaleString()}`}</span>

        <h3 style={{ color: "rgb(221, 34, 133)" }}>We are open</h3>
      </div>
    ) : (
      <div>
        <QueryBuilderIcon color="secondary" />
        <span>{`${new Date().toLocaleString()}`}</span>

        <h3 style={{ color: "black" }}>We are closed</h3>
      </div>
    );
  };
  return (
    <div className="aboutUsElement">
      <div className="OpHrTable" style={{ style: "overflow-x:auto;" }}>
        <h4 style={{ color: "black" }}>Opening Hours</h4>
        <hr/>
        {isItOpen()}
        <hr />
        <table>
          <tbody>
            <tr>
              <td>monday</td>
              <td>
                <p>09:00 - 12:00</p>
                <p>15:00 - 18:00</p>
              </td>
            </tr>
            <tr>
              <td>tuesday</td>
              <td>
                <p>09:00 - 12:00</p>
                <p>15:00 - 18:00</p>
              </td>
            </tr>
            <tr>
              <td>wednesday</td>
              <td>
                <p>09:00 - 12:00</p>
                <p>15:00 - 18:00</p>
              </td>
            </tr>
            <tr>
              <td>thirsday</td>
              <td>
                <p>09:00 - 12:00</p>
                <p>15:00 - 18:00</p>
              </td>
            </tr>
            <tr>
              <td>friday</td>
              <td>
                <p>09:00 - 12:00</p>
                <p>15:00 - 18:00</p>
              </td>
            </tr>
            <tr>
              <td>saturday</td>
              <td>
                <p>09:00 - 12:00</p>
                <p>15:00 - 18:00</p>
              </td>
            </tr>
            <tr>
              <td>sunday</td>
              <td>
                <p>09:00 - 18:00</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OpeningHours;
