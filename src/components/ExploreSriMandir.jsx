import React from 'react'
import styled from 'styled-components'
import Puja from "../assets/puja.svg"
import Call from "../assets/call.svg"


function ExploreSriMandir() {
  return (
    <EXPLORECONTAINER>
    <div className='main'>
        <section>
            <h1>Explore Sri Mandir</h1>
            <div className='explore_optiopns'>
                <div className='explore_cont'>
                    <img src={Puja} alt="" />
                    <p>Book Pujas at Temple</p>
                </div>
                <div className='explore_cont'>
                    <img src={Call} alt="" />
                    <p>Talk to Astrologers</p>
                </div> 
            </div>
        </section>
    </div>
    </EXPLORECONTAINER>
  )
}

export default ExploreSriMandir

const EXPLORECONTAINER = styled.div`
section{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 45px;
}
section > h1{
    font-size: 35px;
}

    .explore_optiopns{
        padding-top: 50px;
        padding-bottom: 50px;
        display: flex;
        margin: auto;
        max-width: 1200px;
        gap: 60px;
        cursor: pointer;
    }
    .explore_cont{
        width: 12.5%;
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
        align-items: center;
        text-align: center;
        /* border: 1px solid red; */
    }
    .explore_cont > img{
       width: 80%;
    }
`