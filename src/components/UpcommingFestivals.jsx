import React from 'react'
import Arti from "../assets/aarti_article_image.webp"
import Chalisa from "../assets/chaalisa_article_image.webp"
import styled from 'styled-components'

function UpcommingFestivals() {
    return (
    <FESTIVALSCONTAINER>
        <div className='main'>
            <section>
                <div className='heading_cont'>
                    <h1>Read interesting articles about upcoming fasts, festivals, and everything around Sanatan Dharma.</h1>
                    <p>Read interesting articles about upcoming fasts, festivals, and everything around Sanatan Dharma.</p>
                    <button>Read All →</button>
                </div>
                <div className='festival_optiopns'>
                    <div className='festival_cont'>
                        <div className='img_cont'>
                            <img src={Arti} alt="" />
                        </div>
                        <div className='text_cont'>
                            <h3>Arti</h3>
                            <p>Find complete lyrics of all the famous Aartis and easily worship your beloved God.</p>
                            <button className='btn'>Read All</button>
                        </div>
                    </div>
                    <div className='festival_cont'>
                        <div className='img_cont'>
                            <img src={Chalisa} alt="" />
                        </div>
                        <div className='text_cont'>
                            <h3>Chalisa</h3>
                            <p>You will get complete Chalisa of all the deities. Read Chalisa during the Pooja of your beloved deities and seek their grace.</p>
                            <button className='btn'>Read All</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </FESTIVALSCONTAINER>
  )
}

export default UpcommingFestivals

const FESTIVALSCONTAINER = styled.div`
.main {
    background-color: #FFFFFF;
    margin-bottom: 60px;
}
section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    max-width: 1280px;
    margin: auto;
}

.heading_cont {
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
    font-size: 20px;
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
    &:hover {
        text-decoration: underline;
    }
}

.btn {
    border: none;
    cursor: pointer;
    background-color: transparent;
    font-size: 18px;
    color: #F18912;
    text-decoration: underline;
    &:hover {
        text-decoration: none;
    }
}

.festival_optiopns {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
}

.festival_cont {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;
    gap: 20px;
}

.img_cont {
    flex: 1;
}

.img_cont > img {
    width: 100%;
    height: auto;
}

.text_cont {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    gap: 20px;
}


.text_cont > p {
    flex-grow: 1;
}

.text_cont > .btn {
    align-self: flex-start;
}
`;
