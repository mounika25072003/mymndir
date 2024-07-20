import React, { useState } from 'react';
import pujaPackages from '../utils/PujaPackages';
import styled from 'styled-components';

function Packages() {
  const [packages] = useState(pujaPackages);

  return (
    <PACKAGECONTAINER>
      <div className='main'>
        <div className='section'>
          <h1 id='pack'>Select puja package</h1>
          <div className='packages_cont'>
            {packages?.map((item) => (
              <div key={item.id} className='package_card'>
                <div className='card_content'>
                  <div>
                    <h1>{item.price}</h1>
                    <h3>{item.name}</h3>
                    <p>Package for {item.id === 1 ? '1 Person' : item.id === 2 ? '2 People' : item.id === 3 ? '4 People' : '6 People'}</p>
                  </div>
                  <hr className='firstHr'/>
                  <ul>
                    {item.details?.map((li, index) => (
                      <li key={index}>{li}</li>
                    ))}
                  </ul>
                </div>
                <hr />
                <button>PARTICIPATE →</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PACKAGECONTAINER>
  );
}

export default Packages;

const PACKAGECONTAINER = styled.div`
  .main {
    padding: 20px;
  }
  
  .section {
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 1280px;
    width: 100%;
    margin: auto;
  }


  .packages_cont {
    display: flex;
    gap: 20px;
    justify-content: space-between;
    flex-wrap: wrap; 
  }

  .package_card {
    border: 1px solid red;
    width: calc(25% - 20px); 
    box-sizing: border-box; 
    padding: 20px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    min-height: 300px; 
    position: relative; 
  }

  .card_content {
    flex: 1; 
  }

   .card_content>div{
    text-align: center;
   } 
   .card_content>div > h3{
    font-size: 18px;
   } 
  .package_card h1, .package_card h3 {
    margin: 0;
  }

  .package_card ul {
    padding-left: 20px;
  }

  .package_card ul li {
    list-style-type: disc;
  }

  .package_card button {
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #00BD68;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* .package_card hr {
    margin: 0;
  } */
 .firstHr{
    margin-top: 10px;
    margin-bottom: 10px;
 }

`;















