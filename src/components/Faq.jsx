import React, { useState } from 'react';
import styled from 'styled-components';
import faqData from '../utils/FaqData'; // Assuming this is where your faqData array is stored

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <FAQContainer>
      <h1>Frequently Asked Questions</h1>
      {faqData.map((item, index) => (
        <div key={index}>
          <Question onClick={() => handleToggle(index)}>
            {item.question}
            <span>{activeIndex === index ? '-' : '+'}</span>
          </Question>
          {activeIndex === index && <Answer>{item.answer}</Answer>}
        </div>
      ))}
    </FAQContainer>
  );
};

export default FAQs;

const FAQContainer = styled.div`
  max-width: 1280px;
  margin: auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 10px;
  margin-bottom: 20px;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
`;

const Question = styled.div`
  background: #fff;
  padding: 15px;
  margin: 10px 0;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 17px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background: #f1f1f1;
  }
`;

const Answer = styled.div`
  background: #fff;
  padding: 15px;
  margin: 5px 0 10px 0;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 15px;
  color: gray;
`;
