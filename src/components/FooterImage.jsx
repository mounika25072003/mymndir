
import React from 'react'
import FamilyImg from "../assets/family.webp"
import PlayStore from "../assets/playstore.svg"
import AppStore from "../assets/appstore.svg"
import styled from 'styled-components'

function FooterImage() {
  return (
    <FOOTERIMAGECONTAINER>
    <div className='main'>
        <section>
            <div className='left_con'>
                <div className='text_cont'>
                    <h1>Download Sri Mandir app now !!</h1>
                    <p>Connect to your beloved God, anytime, anywhere!</p>
                </div>
               <div className='store_icons'>
                    <img src={PlayStore} alt="" />
                    <img src={AppStore} alt="" />
               </div>
            </div>
            <div className='right_con'>
                <img src={FamilyImg} alt="" />
            </div>
        </section>
    </div>
    </FOOTERIMAGECONTAINER>
  )
}

export default FooterImage

const FOOTERIMAGECONTAINER = styled.div`
    .main{
        background-color: #FFFFFF;
    }
    section{
        display: flex;
        max-width: 1280px;
        margin: auto;
        justify-content: space-between;
        align-items: center;
        /* padding: 70px 0px 70px 0px; */
    }

    .left_con{
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    .store_icons{
        display: flex;
        gap: 15px;
    }
    h1{
        font-size: 36px;
        margin-bottom: 20px;
    }
    .right_con{
        width: 50%;
    }
    /* .right_con > img{
        width: 100%;
    } */
`