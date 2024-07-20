import React from 'react'
import FooterImage from '../components/FooterImage'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import PujaSeva from '../components/PujaSeva'
import pujaData from '../utils/PujaData'
import styled from 'styled-components'
import Filter from "../assets/filters.svg"

function Puja() {
  return (
    <PUJACONTAINER>
    <div className='main'>
        <Banner/>
        <div className='filter'>
          <div className='filter_cont'>
            <button><img src={Filter} alt="" /> Filter</button>
          </div>
          <div className='text_cont'>
              <h1>Upcoming Pujas on Sri Mandir.</h1>
              <p> Book online puja with Sri Mandir in more than 500+ temples across India. Receive video of the puja along with the Prasad and receive blessings from the divine for prosperity and well-being of you and your family</p>
          </div>
        </div>
        <div className='pujaData'>
            <PujaSeva pujaData={pujaData} heading={false}/>
        </div>
        <FooterImage/>
        <Footer/>
    </div>
    </PUJACONTAINER>
  )
}

export default Puja

const PUJACONTAINER = styled.div`
.filter{
  margin-top: 50px;
  margin-left: 25px;
  max-width: 1280px;
  margin: auto;
}

.filter_cont{
  background-color: #FFFFFF;
  position: sticky;
  top: 80px;
  
}

.filter_cont>button{
   margin-right: 15px;
   padding: 8px 20px;
   border: none;
   border-radius: 5px;
   background-color: #F9FAFB;
   color: #1A6FE3;
   font-weight: bold;
}
.filter_cont>button:nth-child(1)>img{
  position: relative;
  top: 3px;
  width: 15px;
}
 .pujaData{
  margin-top: 40px;
 }

 .text_cont{
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
 }
 .text_cont>p{
  font-size: 20px;
 }

`









