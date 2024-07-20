import React from 'react'
import HeroImg from "../assets/heroImg.webp"
import Achivment from "../assets/achievement.webp"
import PlayStore from "../assets/playstore.svg"
import AppStore from "../assets/appstore.svg"
import styled from 'styled-components'

function HeroImage() {
  return (
    <HEROCONTAINER>
    <div className='main'>
        <section>
            <div className='left_con'>
                <div>
                    <p><span><img src={Achivment} alt="" /></span> WORLD'S LARGEST APP FOR HINDU DEVOTEES</p>
                </div>
                <div>
                    <div> <h1>Pray daily with <span>Sri Mandir</span>.</h1></div>
                    <div><h1>One App for all your devotional needs.</h1></div>
                </div>
               <div className='store_icons'>
                    <img src={PlayStore} alt="" />
                    <img src={AppStore} alt="" />
               </div>
            </div>
            <div className='right_con'>
                <img src={HeroImg} alt="" />
            </div>
        </section>
    </div>
    </HEROCONTAINER>
  )
}

export default HeroImage

const HEROCONTAINER = styled.div`
    .main{
        background-color: #FEF5EC;
       
    }
    section{
        display: flex;
        max-width: 1280px;
        margin: auto;
        justify-content: space-between;
        align-items: center;
        padding: 70px 0px 70px 0px;
    }

    .left_con{
        width: 40%;
    }
    .store_icons{
        display: flex;
        gap: 15px;
    }
    .left_con >div:nth-child(2){
        margin-bottom: 40px;
    }
    .left_con >div >p{
        display: flex;
        gap: 5px;
    }
    h1{
        font-size: 36px;
    }
    h1>span{
        color: #F18912;
    }
    .right_con{
        width: 40%;
    }
    .right_con > img{
        width: 100%;
    }
`