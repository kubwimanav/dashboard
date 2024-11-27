import React from 'react'
import '../styles/Addlanguange.css'
import rwanda from'/rwanda.png'
import hindi from "/argentina.png";
import russia from"/beligium.png";
import brazile from"/brazile.png";
import france from "/france.png";
import turkish from "/poland.png";
import english from"/america.png";

function Addlanguange() {
  return (
    <div className='languange-card'>
      <table className='languange-table'>
        <tbody>
          <tr>
            <td>
              <img src={rwanda} alt="" />
            </td>
            <td> Kinyarwanda </td>
          </tr>
          <tr>
            <td>
              <img src={france} alt="" />
            </td>
            <td>French</td>
          </tr>
          <tr>
            <td>
              <img src={english} alt="" />
            </td>
            <td>English</td>
          </tr>
          <tr>
            <td>
              <img src={brazile} alt="" />
            </td>
            <td> Portuguese</td>
          </tr>
          <tr>
            <td>
              <img src={turkish} alt="" />
            </td>
            <td> Turkish</td>
          </tr>
          <tr>
            <td>
              <img src={hindi} alt="" />
            </td>
            <td> Hindi</td>
          </tr>

          <tr>
            <td>
              <img src={russia} alt="" />
            </td>
            <td> Russia</td>
          </tr>
        </tbody>
          </table>
          <button>Add languange</button>
    </div>
  );
}

export default Addlanguange