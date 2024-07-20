

import React from "react";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import reviewData from "../utils/ReviewData"; 

const Rating = ({heading,para}) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3 // Optional, default: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // Optional, default: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // Optional, default: 1
    }
  };

  return (
    <CAROUSELCONTAINER>
      <div className="main">
        <section>
          <h2>{heading? heading:"Reviews & Ratings"}</h2>
          <p>{para ? para : "Read what our beloved devotees have to say about Sri Mandir."}</p>
          <Carousel 
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            customTransition="all .5"
            transitionDuration={500}
          >
            {reviewData.map((review, index) => (
              <div className="card" key={index}>
                <p>{review.review}</p>
                <div className="img_cont">
                  <img src={review.imageUrl} alt={review.name} />
                  <div>
                    <h2>{review.name}</h2>
                    <p>{review.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </section>
      </div>
    </CAROUSELCONTAINER>
  );
};

export default Rating;

const CAROUSELCONTAINER = styled.div`
  .main {
    background-color: #FAFAFA;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

  section {
    max-width: 1280px;
    margin: auto;
  }

  section > h2 {
    font-size: 35px;
    margin-top: 50px;
    margin-bottom: 15px;
  }

  section > p {
    font-size: 20.5px;
    margin-bottom: 30px;
  }

  .card {
    /* background-color: #fff; */
    border-radius: 10px;
    /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
    margin-right: 25px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    height: 90%;
    min-height: 350px; // Fixed height for consistency
  }

  .card > p {
    background-color: #F1F1F1;
    border-radius: 10px;
    padding: 20px;
    flex: 1; // Ensures text takes up available space
    text-align: justify;
  }

  .img_cont {
    display: flex;
    gap: 15px;
    text-align: left;
    margin-top: 20px;
  }

  .img_cont > img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  .img_cont > div > h2 {
    font-size: 16px;
  }

  .img_cont > div > p {
    font-size: 14px;
    color: #777;
  }

  
`;




