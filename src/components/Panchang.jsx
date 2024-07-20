import React from 'react'
import Watch from "../assets/watch.svg"
import Headphone from "../assets/headphone.svg"
import styled from 'styled-components'

function Panchang() {
    return (
    <PANCHANGCONTAINER>
    <div className='main'>
        <section>
           <div className='heading_cont'>
                <h1>Complete Panchang</h1>
                <p>Sri Mandir Panchang offers you all the important information about Tithi,</p>
                <p>Auspicious-Inauspicious timings, and upcoming fasts and festivals.</p>
                <button>View Detailed Panchang →</button>
           </div>
            <div className='panchang_optiopns'>
                <div className='panchang_cont'>
                    <div>
                        <img src={Watch} alt="" />
                    </div>
                    <div>
                        <h3>Auspicious-Inauspicious timings</h3>
                    </div>
                    <div >
                        <p>Check out Auspicious and Inauspicious Timings for your city.</p>
                    </div>
                </div>
                <div className='panchang_cont'>
                    <div>
                        <img src={Headphone} alt="" />
                    </div>
                    <div>
                        <h3>Rahukal and Gulik Kaal</h3>
                    </div>
                    <div >
                        <p>Check out Rahukal and Gulik Kaal for your city.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
    </PANCHANGCONTAINER>
  )
}

export default Panchang




const PANCHANGCONTAINER = styled.div`

section {
    background-color: #F9FAFB;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
    margin-bottom: 60px;
}

.heading_cont {
    /* background-color: #FFFFFF; */
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
    cursor: pointer;
    background-color: transparent;
    font-size: 18px;
    font-weight: bold;
    color: #F18912;
    margin-bottom: 35px;
    margin-top: 15px;
    &:hover{
        text-decoration: underline;
    }
}

.panchang_optiopns {
    display: flex;
    margin: auto;
    max-width: 1280px;
    gap: 30px;
}
.panchang_optiopns > div:nth-child(1) {
    background: linear-gradient(to right, #FCC89F, #FDE6D4);
}
.panchang_optiopns > div:nth-child(2) {
    background: linear-gradient(to right, #B6DEFF, #E0F1FF);
}
.panchang_optiopns > div:nth-child(3) {
    background: linear-gradient(to right, #FBBBB4, #FFDDD9);
}
.panchang_optiopns > div:nth-child(4) {
    background: linear-gradient(to right, #E0B4FE, #EBCCFF);
}

.panchang_cont {
    width: 25%;
    border-radius: 5px;
    padding: 24px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
}


.panchang_cont > div:nth-child(1) > img {
    border-radius: 8px;
}

.panchang_cont > div:nth-child(3) > p {
    font-size: 16px;
}


`;
