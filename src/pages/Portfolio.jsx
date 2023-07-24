import React from "react";
import NavBar from "../components/NavBar";
import ProjectLayout from "../components/ProjectLayout";
import ProjectLayout2 from "../components/ProjectLayout2";
import Footer from "../components/Footer";

const Portfolio = () => {
  return (
    <>
    <div className='bg-[#25262a] text-[#FFFFFF]'>
      <NavBar />
      <ProjectLayout title={'Branding Nice Studio'} url={'https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/portfolio-1-img.jpg'} description={`The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can.`} />
      <ProjectLayout2 title={'Mobile Card App'} url={'https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/portfolio-2-img.jpg'} desc={`The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can.`} />
      <ProjectLayout  title={`Resturant Landing Page`} url={`https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/portfolio-3-img.jpg`} description={`The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can.`}/>
      <ProjectLayout2 title={`Essential UI Icon Pack`} url={`https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/portfolio-4-img.jpg`} desc={`The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can.`} />
      <ProjectLayout title={`Financial App Design`}  url={`https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/portfolio-5-img.jpg`} description={`The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can.`}/>
      <ProjectLayout2 title={`Design Brand Guidelines`} url={`https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/portfolio-6-img.jpg`} desc={`The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can.`} />
      <ProjectLayout title={`Flight Booking App`} url={`https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/portfolio-7-img.jpg`} description={`The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can.`} />
      <Footer/>
      </div>
    </>
  );
};

export default Portfolio;
