import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Data from '../utils/PujaData'

function PujaSeva({ pujaData = Data, heading = true }) {

  let dataToShow = heading ? pujaData.slice(0, 3) : pujaData;

  return (
    <PUJASEVACONTAINER heading={heading}>
      <div className='main'>
        <section>
          {
            heading ? (
              <div className='heading_cont'>
                <h1>Puja Seva for you and your loved ones</h1>
                <p>Book Pujas in your and your family's name at 1000+ renowned temples in India.</p>
                <p>You will also recive a video of the Puja and Prasad along with divine blessings.</p>
                <button>View All Puja →</button>
              </div>
            ) : (
              null
            )
          }
          <div className='pujaseva_optiopns'>
            {dataToShow?.map((item, i) => {
              return (
                <Link to={`/puja/${item.id}`} className='pujaseva_cont' key={i}>
                  <div>
                    <img src={item.image} alt="" />
                  </div>
                  <div>
                    <p>{item.title}</p>
                    <div></div>
                  </div>
                  <div>
                    <p> {item.purpose}</p>
                    <h3> {item.description} </h3>
                  </div>
                  <div className='puja_date_venue'>
                    <div className='puja_details'>
                      <img src={item.venueImage} alt="" />
                      <p> {item.venue} </p>
                    </div>
                    <div className='puja_details'>
                      <img src={item.dateImage} alt="" />
                      <p>{item.date}</p>
                    </div>
                    <div>
                      <button>PARTICIPATE →</button>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </section>
      </div>
    </PUJASEVACONTAINER>
  )
}

export default PujaSeva

const PUJASEVACONTAINER = styled.div`
  section {
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .heading_cont {
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 70px;
  }

  .heading_cont > h1 {
    font-size: 35px;
    margin-bottom: 15px;
  }

  .heading_cont > p {
    font-size: 20.5px;
    color: gray;
  }

  .heading_cont > button {
    border: none;
    background-color: transparent;
    font-size: 18px;
    font-weight: bold;
    color: #F18912;
    margin-bottom: 15px;
    margin-top: 15px;
    &:hover {
      text-decoration: underline;
    }
  }

  .pujaseva_optiopns {
    margin: auto;
    max-width: 1280px;
    gap: 40px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    background-color: ${props => props.heading ? 'white' : "#F9F8FD"};
  }

  .pujaseva_cont {
    border-radius: 7px;
    border: 1px solid lightgray;
    padding: 15px;
    cursor: pointer;
    display: flex;
    margin: auto;
    flex-direction: column;
    background-color: ${props => props.heading ? "#F9F8FD" : 'white'};
    text-decoration: none;
    color: inherit;
  }

  .pujaseva_cont > div:nth-child(1) > img {
    width: 100%;
    border-radius: 5px;
  }

  .pujaseva_cont > div:nth-child(2) > p {
    text-align: center;
    color: #D61F69;
    font-weight: bold;
    font-size: 12px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .pujaseva_cont > div:nth-child(2) > div {
    background: linear-gradient(to right, #f8edf1, #D61F69, #f5cfde);
    height: 1px;
  }

  .pujaseva_cont > div:nth-child(3) > h3 {
    font-size: 21px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .pujaseva_cont > div:nth-child(3) > p {
    font-size: 14.5px;
  }

  .puja_details {
    display: flex;
    gap: 18px;
  }

  .puja_details > p {
    font-size: 15px;
  }

  .puja_date_venue > div > button {
    background-color: #00BD68;
    border: none;
    width: 100%;
    color: white;
    padding: 15px;
    border-radius: 10px;
    font-weight: bold;
    cursor: pointer;
  }

  .puja_date_venue {
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: auto;
  }
`
