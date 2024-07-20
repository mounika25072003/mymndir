import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Data from '../utils/PujaData';
import Countdown from '../components/Countdown';
import VisitedPeople from '../components/VisitedPeople';
import Footer from "../components/Footer"
import Rating from "../components/Rating"
import FAQs from '../components/Faq';
import Packages from '../components/Packages';

// Function to parse date string to a valid Date object
const parsePujaDate = (dateStr) => {
  const [day, month] = dateStr.split(',')[0].split(' ');
  const year = new Date().getFullYear(); // Use the current year or set it explicitly if needed
  return new Date(`${month} ${day}, ${year}`);
};

const PujaDetail = () => {
  let { id } = useParams(); 
  id = +id;

  const puja = Data.find(item => item.id === id);

  if (!puja) {
    return <div>Puja not found</div>;
  }

  const parsedDate = parsePujaDate(puja.date);

  return (
    <PujaDetailContainer>
      <div className='main'>
          <div className='section'>
              <div className="detail-banner">
                  <img src={puja.image} alt={puja.title} />
              </div>
              <div className="detail-content">
                  <h5>{puja.title}</h5>
                  <div className='line'></div>
                  <h1>{puja.description}</h1>
                  <h2>{puja.purpose}</h2>
                  <p><img src={puja.venueImage} alt="" /> {puja.venue}</p>
                  <p><img src={puja.dateImage} alt="" /> {puja.date}</p>
                  <h3>Puja booking will close in :</h3>
                  <Countdown targetDate={parsedDate}/>
                  <VisitedPeople/>
              </div>
          </div>
          <div className='navigate_more_details'>
                <hr />
                <div>
                    <p>About Puja</p>
                    <p>Benefits</p>
                    <p>Process</p>
                    <p>Temple Details</p>
                    <p>Packages</p>
                    <p>Reviews</p>
                    <p>FAQs</p>
                  </div>    
                <hr />
          </div>
          <Packages/>
          <Rating heading={"What devotees Say about Sri Mandir Puja ?"} para={"Reviews and Ratings from our customers who performed online Puja with us."}/>
          <FAQs />
          <Footer/>
      </div>  
    </PujaDetailContainer>
  );
};

export default PujaDetail;



const PujaDetailContainer = styled.div`

.detail-content>h1{
    font-size: 25px;
}
.detail-content>h2{
    font-size: 22px;
    color: gray;
}
.detail-content>h3{
    font-size: 14px;
    color: gray;
}
    h5{
        color: #D61F69;

    }
   .line{
    background: linear-gradient(to right,#D61F69, #f5cfde);
    height: 1px;
    width: 400px;
   }
  
   .section {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1280px;
    margin: auto;
    margin-top: 20px;
    gap: 20px;
  }

   .section >div{
    height: auto;
   }
  .detail-banner>img{
    width: 100%;
    height: 500px;
    border-radius: 10px;
  }
  .detail-banner{
    margin-left: 20px;
  }
  .detail-content{
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .navigate_more_details > div{
    max-width: 1280px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    padding: 20px;
  }
  .navigate_more_details > div>p {
    font-weight: bold;
    color: gray;
  }

  .navigate_more_details {
    margin-top: 20px;
    position: sticky;
    top: 68px;
    background-color: #FFFFFF;
    z-index: 999;
  }
`;













