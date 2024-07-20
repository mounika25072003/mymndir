// src/components/Banner.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Sample images
import Image1 from '../assets/banner_devotees.webp';
import Image2 from '../assets/banner_puja.webp';
import Image3 from '../assets/banner_review.webp';


const images = [Image1, Image2, Image3];


const BannerImageComponent = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2500);

        return () => clearTimeout(timeout);
    }, [currentImageIndex]);

    return (
        <BannerContainer>
            <Image src={images[currentImageIndex]} alt={`Slide ${currentImageIndex}`} />
            <Dots>
                {images.map((_, index) => (
                    <Dot key={index} active={index === currentImageIndex} />
                ))}
            </Dots>
        </BannerContainer>
    );
};

export default BannerImageComponent;

const BannerContainer = styled.div`
    position: relative;
    top: 20px;
    width: 100%;
    max-width: 1230px;
    margin: auto;
    overflow: hidden;
`;

const Image = styled.img`
    width: 100%;
    height: auto;
    transition: ease-in-out;
`;


const Dots = styled.div`
    margin: 10px;
    bottom: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 5px;
`;


const Dot = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${({ active }) => (active ? '#F18912' : 'gray')};
`;




