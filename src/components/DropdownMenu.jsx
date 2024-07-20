import React from 'react';
import styled from 'styled-components';
import UserIcon from "../assets/profileicon.svg"
import Arrow from "../assets/rightarrow.svg"
import History from "../assets/history.svg"
import Phone from "../assets/call2.svg"
import Whatsapp from "../assets/whatsapp2.svg"
import {useNavigate } from 'react-router-dom';

const DropdownMenu = ({toggleDropdown}) => {
    const navigate = useNavigate()

    return (
        <Menu>
            <Header>
                <h3>Hello, Sri Mandir Bhakt</h3>
                <p>Welcome to Sri Mandir Puja Seva</p>
            </Header>
            <div>
                <h5>Account Details</h5>
                <MenuItem><img src={UserIcon} alt="" /> My profile <span className='arrow'><img src={Arrow} alt="" /></span></MenuItem>
                <MenuItem onClick={()=>{
                    navigate("/puja/history")
                    toggleDropdown()
                    }}
                >
                    <img src={History} alt="" /> My Puja Bookings <span className='arrow'><img src={Arrow} alt="" /></span></MenuItem>
                </div>
            <Divider />
            <Support>
                <SupportItem>
                    <SupportLabel>Help & Support for Puja Booking</SupportLabel>
                    <div className='contact'>
                        <SupportDetails><img src={Phone} alt="" />XXXX 939016</SupportDetails>
                    </div>
                   <div className='social_icon'>
                        <div><img src={Whatsapp} alt=""/> Whatsapp us</div>
                   </div>
                </SupportItem>
            </Support>
        </Menu>
    );
};

export default DropdownMenu;

const Menu = styled.div`
    position: absolute;
    top: 50px;
    right: 0;
    background-color: white;
    border: 1px solid #ddd;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    overflow: hidden;
    width: 300px;
    z-index: 1000;

    h5{
        color: gray;
        padding: 10px 20px;
    }
`;

const Header = styled.div`
    padding: 15px;
    border-bottom: 1px solid #ddd;
    background-color: #f5f5f5;
    h3 {
        margin: 0;
        font-size: 16px;
        font-weight: bold;
    }
    p {
        margin: 5px 0 0;
        font-size: 12px;
        color: #777;
    }
`;

const MenuItem = styled.div`
    display: flex;
    align-items: center;
    font-size: 13px;
    padding: 10px 20px;
    cursor: pointer;
    &:hover {
        background-color: #f5f5f5;
    }

    img {
        margin-right: 10px;
    }

    .arrow {
        
        margin-left: auto;
        display: flex;
        align-items: center;
    }
`;


const Divider = styled.div`
    height: 1px;
    background-color: #ddd;
    margin: 10px 0;
`;

const Support = styled.div`
    padding: 10px 20px;
`;

const SupportItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    .contact{
        background-color: #F9F8FD;
        padding: 10px;
        border-radius: 10px;
        cursor: pointer;
    }
    .timing{
        display: flex;
        align-items: center;
        font-size: 9px;
        color: #777;
        margin-left: 30px;
    }

    .social_icon{
        display: flex;
        justify-content: space-between;
         margin-top:10px;
    }
    .social_icon >div{
        background-color: #F9F8FD;
        padding: 8px;
        border-radius: 10px;
        cursor: pointer;
        font-size: 12px;
        display: flex;
        gap: 5px;
        justify-content: center;
        align-items: center;
    }

`;

const SupportLabel = styled.div`
    font-size: 12px;
    margin-bottom: 5px;
`;

const SupportDetails = styled.div`
    display: flex;
    align-items: center;
    font-size: 12px;
    img {
        margin-right: 8px;
    }
`;
