import React from 'react'
import styled from 'styled-components'
import BannerImageComponent from './BannerImageComponent'

function Banner() {
  return (
    <BANNERCONTAINER>
    <div className='main'>
        <section>
            <h1>Perform your Puja as per Vedic rituals at Famous Hindu Temples in India with Sri Mandir</h1>
            <BannerImageComponent/>
        </section>
    </div>
    </BANNERCONTAINER>
  )
}

export default Banner

const BANNERCONTAINER = styled.div`
 
 .main{
    background: linear-gradient(to bottom, #FEECDC, #FFFDFA);
 }


 section{
    max-width: 1280px; 
    margin: auto;

 }

 section>h1{
    padding: 20px 30px 0px 20px;
    font-size: 36px;
 }
 
`