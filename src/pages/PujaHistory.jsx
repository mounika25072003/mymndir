import React from 'react';
import styled from 'styled-components';
import StackImg from "../assets/empty_stack.svg"
import { useNavigate } from 'react-router-dom';

function PujaHistory() {
    const navigate = useNavigate()
  return (
    <Container>
      <Icon>
        <Image src={StackImg} alt="No bookings icon" />
      </Icon>
      <h2>No Puja has been booked yet</h2>
      <p>Book your Puja online at Popular Temples of India. Panditji will take sankalp with your name and gotra during the Puja</p>
      <Button onClick={()=>navigate("/puja")}>Book Pooja Now</Button>
    </Container>
  );
}

export default PujaHistory;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  max-width: 410px;
  margin: auto;
  text-align: center;
  gap: 15px;
h2{
    font-size: 20px;
}
`;

const Icon = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
`;

const Button = styled.button`
  background-color: #ff9900;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
`;
