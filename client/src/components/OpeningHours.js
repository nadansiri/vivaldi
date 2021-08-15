import React from 'react'
import {Table} from "react-bootstrap"

const OpeningHours = () => {
    return (
        <div className="aboutUsElement" >
        <div className="OpHrTable" style={{style:"overflow-x:auto;"}}>
        <h4 >Opening Hours</h4>
        <hr/>
                <table >
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
    )
}

export default OpeningHours
