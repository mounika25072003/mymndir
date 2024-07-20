import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  
`;

const AvatarContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: -10px;

`;

const Text = styled.p`
span{
    color: #F49412;
}
  font-size: 20px;
  line-height: 1.5;
  text-align: left;
`;

const Button = styled.button`
width: 500px;
  background-color: #4CAF50;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
`;

const VisitedPeople = () => {
  return (
    <Container>
      <AvatarContainer>
        <Avatar src="https://i.pravatar.cc/150?img=1" alt="Avatar 1" />
        <Avatar src="https://i.pravatar.cc/150?img=2" alt="Avatar 2" />
        <Avatar src="https://i.pravatar.cc/150?img=3" alt="Avatar 3" />
        <Avatar src="https://i.pravatar.cc/150?img=4" alt="Avatar 4" />
        <Avatar src="https://i.pravatar.cc/150?img=5" alt="Avatar 5" />
        <Avatar src="https://i.pravatar.cc/150?img=6" alt="Avatar 6" />
        <Avatar src="https://i.pravatar.cc/150?img=7" alt="Avatar 7" />
      </AvatarContainer>
      <Text>
        Till now <span>2,00,000+ Devotees</span> have participated in Pujas
        conducted by Sri Mandir Puja Seva.
      </Text>
      <Button>Select puja package →</Button>
    </Container>
  );
};

export default VisitedPeople;