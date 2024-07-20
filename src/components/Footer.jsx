import React from 'react'
import styled from 'styled-components'
import Logo from "../assets/logo.svg";

function Footer() {
  return (
    <FOOTERCONTAINER>
    <div className='main'>
        <footer>
            <div className='orange_bg'>
                <div className='top_cont'>
                    <div className='img_cont'>
                        <img src={Logo} alt='logo' />
                    </div>
                    <div className='text_cont'>
                        <div>
                            <h5>ABOUT US</h5>
                            <h5>TERMS AND CONDITIONS</h5>
                            <h5>PRIVACY POLICY</h5>
                        </div>
                        <div>
                            <h6>@ 2024 Firstprinciple Appsforbharat PVT LTD. All rights reserved</h6>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
    </FOOTERCONTAINER>
  )
}

export default Footer

const FOOTERCONTAINER = styled.div`
   .main{
    margin-top: -5px;
   }
   .orange_bg{
    background: linear-gradient(to right, #FA6F2D, #FD8524, #FD8524);
   }

   .top_cont{
    max-width: 1280px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
   }
   .img_cont{
    margin-left: 30px;
    margin-top: 15px;
   }
   .img_cont>img{
    cursor: pointer;
   }
   h5{
    cursor: pointer;
   }

   .text_cont{
    text-align: right;
    margin-right: 30px;
    margin-top: 15px;
   }
   .text_cont>div:nth-child(1){
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
   }

   .below_cont{
    display: flex;
    justify-content: space-between;
    max-width: 1280px;
    margin: auto;
    align-items: center;
   }

   .below_img_cont{
    display: flex;
    gap: 15px;
   }
   .below_img_cont>img{
    width: 130px;
    margin-top: 15px;
    margin-bottom: 15px;
   }

   .icon_cont{
    display: flex;
    gap: 18px;
   }


`