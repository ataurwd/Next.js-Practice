// pages/index.tsx
import React from 'react';
import '../src/css/component.css'
import Home from '@/src/Home';
import { CardContainer, CardBody, CardItem } from '../components/ui/3d-card'; // Adjust the path if needed

const HomePage: React.FC = () => {
  return (
    <div>
      <CardContainer className="card-container" containerClassName="container-class">
        <CardBody className="card-body">
          <CardItem
            translateX={10}
            translateY={20}
            translateZ={30}
            rotateX={10}
            rotateY={20}
            rotateZ={30}
            className="card-item"
          >
            <div className='boxCard'>
              <h1>Make Things float in air</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptatem perferendis nihil repudiandae est et!</p>
              <img src="https://ui.aceternity.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1441974231531-c6227db76b6e%3Fq%3D80%26w%3D2560%26auto%3Dformat%26fit%3Dcrop%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D&w=1080&q=75" alt="" />
              <div className='btnDiv'>
              <button className='btn1'>Try Now</button>
              <button className='btn2'>Sign up</button>
              </div>
            </div>
          </CardItem>
        </CardBody>
      </CardContainer>
      <Home/>
    </div>
  );
};

export default HomePage;
